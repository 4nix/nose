import React, { FC, useState, useEffect } from 'react'
import { List, Button, Modal, Form, Input } from 'antd'
import Axios from 'axios'
import qs from 'qs'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps,
  Redirect,
  useParams
} from "react-router-dom"

interface RouteParams {
  gid?: string,
  rid?: string
}

interface EditFormParams extends RouteParams {
  id?: string,
  type?: any | undefined,
  callback?: Function
}


const url: string = process.env.REACT_APP_HOST + "/admin/list"
const itemUrl: string = process.env.REACT_APP_HOST + "/admin/item"


const NoseList: FC = () => {
  const [data, setData] = useState<any>([])
  const [fresh, setFresh] = useState<boolean>(false)
  const [page, setPage] = useState<Number>(1)
  const [pagination, setPagination] = useState<any>({
    pageSize: 20,
    onChange: (page: React.SetStateAction<Number>) => setPage(page)
  })
  const param = useParams<RouteParams>()

  console.log(param)
  const refresh = () => {
    setFresh(!fresh)
  }

  useEffect(() => {
    let reqUrl: string = url
    if (param.gid) {
      reqUrl += "/" + param.gid
    }

    if (param.gid && param.rid) {
      reqUrl += "/" + param.rid
    }

    Axios.get(reqUrl, { params: { page: page }}).then(res => {
      const { list, total } = res.data
      
      setData(list)
      setPagination({ ...pagination, total: total })
    })
  }, [fresh, page])

  return <div>
    <h3>Gid: { param.gid}, Pid: { param.rid }</h3>
    <EditItem gid={param.gid} rid={param.rid} callback={refresh}>新增</EditItem>
    <List 
      size="small" 
      dataSource={data}
      renderItem={ (item:any) => <List.Item
          actions={[
            <Link to={"/list/" + item.group_id + "/" + item.id} key='list-loadmore-edit'>view</Link>, 
            <EditItem type='a' id={item.id} gid={param.gid} rid={param.rid} callback={refresh}>编辑</EditItem>, 
            <DeleteItem type='a' id={item.id} callback={refresh}>删除</DeleteItem>]}
        >{ item.name }</List.Item> }
      pagination={pagination}
    />
  </div>
}


const EditItem: FC<EditFormParams> = ({ gid, rid, id, type, children, callback }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [form] = Form.useForm()
  const reqUrl = itemUrl + (id ? '/' + id : '')
  
  const submit = () => {
    Axios.post(reqUrl,
      qs.stringify({...form.getFieldsValue(), rid: rid, gid: gid, id: id})
    ).then(res => {
      console.log(res)
      setVisible(false)
      callback && callback()
    })
  }

  const show = () => {
    form.resetFields()
    setVisible(true)
  }

  useEffect(() => {
    if (id && visible === true) {
      Axios.get(reqUrl).then(res => {
        const { data } = res
        console.log(res)
        form.setFieldsValue(data)
      })
    }
  }, [visible])

  return <>
    {type === 'a' ? <a onClick={show}>{children}</a> : <Button type={type} onClick={show}>{children}</Button>}
    <Modal
      title={id ? "编辑:" + id : '新增'}
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={submit}
    >
      <Form labelCol={{span: 8}} wrapperCol={{span: 16}} form={form}>
        <Form.Item label="Groupd ID">{gid}</Form.Item>
        <Form.Item label="Relate ID">{rid}</Form.Item>
        <Form.Item label="Item Name" name='name'>
          <Input />
        </Form.Item>
        <Form.Item label="Config" name='config'>
          <Input.TextArea autoSize={{ minRows: 2 }} />
        </Form.Item>
        <Form.Item label="content" name='content'>
          <Input.TextArea autoSize={{ minRows: 3 }} />
        </Form.Item>
        <Form.Item label="mode" name='model_id'>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  </>
}

const DeleteItem: FC<EditFormParams> = ({ id, children, callback, type }) => {
  const { confirm } = Modal

  const show = () => {
    confirm({
      title: '是否删除：' + id,
      onOk: () => {
        Axios.delete(itemUrl + '/' + id).then(res => {
          callback && callback()
        })
      }
    })
  }

  return <>
    {type === 'a' ? <a onClick={show}>{children}</a> : <Button type={type} onClick={show}>{children}</Button>}
  </>
}

export default NoseList