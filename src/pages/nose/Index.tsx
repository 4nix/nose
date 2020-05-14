import React from 'react';
import { List, Typography, Form, Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import Edit from './Edit'
import Axios from 'axios'
import {
  Link,
  RouteComponentProps
} from "react-router-dom"

interface IProps {

}

interface IState {
  data?: [],
  pagination?: Object,
}

interface RouteParams {
  gid?: string,
  rid?: string
}

interface GroupInfo {
  id: number,
  name: string
}

class Index extends React.Component<RouteComponentProps<RouteParams>, IState> {
  state: Readonly<IState> = {
    data: [],
    pagination: {
      pageSize: 20
    }
  }

  readonly url: string = process.env.REACT_APP_HOST + "/admin/list"
  readonly groupUrl: string = process.env.REACT_APP_HOST + "/admin/group"
  editLayer: any

  constructor(props: RouteComponentProps<RouteParams>) {
    super(props)
  }

  onRef = (ref:any) => {
    this.editLayer = ref
  }

  handleCreate = () => {
    this.editLayer.show()
  }

  handleDelete = (item:GroupInfo) => {
    Modal.confirm({
      title: '确定要删除',
      content: 'ID: ' + item.id + ', Name: ' + item.name,
      onOk:() => {
        Axios.delete(this.groupUrl + '/' + item.id).then(res => {
          this.fetchData()
        })
      }
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    Axios.get(this.url).then(res => {
      this.setState({
        data: res.data,
        pagination: {
          ...this.state.pagination,
          total: res.data.length
        }
      })
    })
  }

  render() {
    return (
      <div style={{margin: "auto", padding: "5px", width: "90%", border: "1px solid #eee"}}>
        <h3>Test nose !</h3>
        <Button onClick={this.handleCreate}>新增</Button>
        <Edit ref={this.onRef} refresh={this.fetchData} />
        <List 
        size="small" 
        dataSource={ this.state.data } 
        renderItem={ (item:any) => <List.Item
                                actions={[
                                  <Link to={"list/" + item.id} key='list-loadmore-edit'>view</Link>, 
                                  <a key='list-loadmore-edit'>edit</a>, 
                                  <a key='list-loadmore-del' onClick={e => {
                                    this.handleDelete(item)
                                  }}>delete</a>]}
                              >{ item.name }</List.Item> }
        pagination={this.state.pagination}
        />
      </div>
    );
  }
}

export default Index;
