import React from 'react';
import { List, Typography, Form, Modal, Button } from 'antd';
import 'antd/dist/antd.css'
import Edit from './Edit'
import Axios from 'axios'

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
  data: []
}

console.log(process.env.REACT_APP_HOST)

class Index extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {data: []}
  }

  url: string = process.env.REACT_APP_HOST + "/admin/grouplist"
  editLayer: any = {}

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
        <Edit ref={this.onRef} />
        <List 
        size="small" 
        dataSource={ this.state.data } 
        renderItem={ (item:any) => <List.Item
                                actions={[
                                  <a key='list-loadmore-edit'>view</a>, 
                                  <a key='list-loadmore-edit'>edit</a>, 
                                  <a key='list-loadmore-del'>delete</a>]}
                              >{ item.name }</List.Item> }
        pagination={{
          onChange: page => {
            console.log(page)
          },
          pageSize: 3,
          total: 20
        }}
        />
      </div>
    );
  }
}

export default Index;
