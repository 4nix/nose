import React from 'react';
import { List, Typography, Form, Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import Edit from './Edit'
import Axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  RouteComponentProps
} from "react-router-dom"

const data: string[] = [
  'line 1',
  'line 2',
  'line 3',
  'line 4',
  'line 5',
  'line 6',
  'line 7',
  'line 8'
];

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

class Index extends React.Component<RouteComponentProps<RouteParams>, IState> {
  state: Readonly<IState> = {
    data: [],
    pagination: []
  }

  readonly url: string = process.env.REACT_APP_HOST + "/admin/list"
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
    this.fetchData()
  }

  fetchData = () => {
    Axios.get(this.url).then(res => {
      this.setState({
        data: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <h3>Test nose!</h3>
        <Button onClick={this.handleCreate}>新增</Button>
        <Edit ref={this.onRef} refresh={this.fetchData} />
        <List 
        size="small" 
        dataSource={ this.state.data } 
        renderItem={ (item:any) => <List.Item
                                actions={[
                                  <Link to={"list/" + item.id} key='list-loadmore-edit'>view</Link>, 
                                  <a key='list-loadmore-edit'>edit</a>, 
                                  <a key='list-loadmore-del'>delete</a>]}
                              >{ item.name }</List.Item> }
        pagination={{
          onChange: page => {
            console.log(page)
          },
          pageSize: 20,
          total: 20
        }}
        />
      </div>
    );
  }
}

export default Index;
