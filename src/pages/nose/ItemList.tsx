import React from 'react';
import { List, Typography, Form, Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import Edit from './EditItem'
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps,
  Redirect
} from "react-router-dom"

interface IProps {

}

interface IState {
  data?: [],
  pagination?: Object,
  gid?: string,
  rid?: string
}

interface RouteParams {
  gid?: string,
  rid?: string
}

interface ItemInfo {
  id: number,
  name: string
}

export default class ItemList extends React.Component<RouteComponentProps<RouteParams>, IState> {
  state: Readonly<IState> = {
    data: [],
    pagination: { pageSize: 20 }
  }

  readonly url: string = process.env.REACT_APP_HOST + "/admin/list"
  readonly itemUrl: string = process.env.REACT_APP_HOST + "/admin/item"
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

  componentDidMount() {
    const {gid, rid} = this.props.match.params
    
    this.setState({
      gid: gid,
      rid: rid
    })
    this.fetchData()
  }

  

  fetchData = () => {
    const {gid, rid} = this.props.match.params
    let url = this.url
    if (gid) {
      url += "/" + gid
    }

    if (gid && rid) {
      url += "/" + rid
    }

    Axios.get(url).then(res => {
      this.setState({
        data: res.data,
        pagination: {
          ...this.state.pagination,
          total: res.data.length
        }
      })
    })
  }

  handleDelete = (item:ItemInfo) => {
    Modal.confirm({
      title: '确定要删除',
      content: 'ID: ' + item.id + ', Name: ' + item.name,
      onOk:() => {
        Axios.delete(this.itemUrl + '/' + item.id).then(res => {
          this.fetchData()
        })
      }
    })
  }

  render() {
    const {gid, rid} = this.props.match.params
    
    return (
      <div>
        <h3>Test item! {gid} {rid} | {this.state.gid} {this.state.rid}</h3>
        <Button onClick={this.handleCreate}>新增</Button>
        <Edit ref={this.onRef} groupID={gid} relateID={rid} refresh={this.fetchData} />
        <List 
        size="small" 
        dataSource={ this.state.data }
        renderItem={ (item:any) => <List.Item
                                actions={[
                                  <Link to={"/list/" + item.group_id + "/" + item.id} key='list-loadmore-edit'>view</Link>, 
                                  <a key='list-loadmore-edit'>edit</a>, 
                                  <a key='list-loadmore-del' onClick={e => {
                                    this.handleDelete(item)
                                  }}>delete</a>]}
                              >{ item.name }</List.Item> }
        pagination={ this.state.pagination }
        />
      </div>
    );
  }
}
