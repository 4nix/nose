import React from 'react';
import { List, Typography, Form, Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css'
import Axios from 'axios'

interface IProps {

}

interface IState {
  visible: boolean,
  groupName: string,
  config: string
}

class Edit extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {visible: false, groupName: "", config: ""}
  }

  handleOK = () => {
    console.log(this.state.groupName)

    let data = new FormData();
    data.append('name', this.state.groupName);
    data.append('config', this.state.config);

    Axios.post(process.env.REACT_APP_HOST + '/admin/group', data)
  }

  handleCancle = () => {
    this.setState({
      visible: false
    })
  }

  show = () => {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
        <Modal
          title="Edit"
          visible={this.state.visible}
          onCancel={this.handleCancle}
          onOk={this.handleOK}
        >
          <Form labelCol={{span: 8}} wrapperCol={{span: 16}}>
            <Form.Item label="Group Name:">
              <Input onChange={
                (e: any) => {
                  this.setState({
                    groupName: e.target.value
                  })
                }
              } />
            </Form.Item>
            <Form.Item label="Config:">
              <Input onChange={
                (e: any) => {
                  this.setState({
                    config: e.target.value
                  })
                }
              }/>
            </Form.Item>
          </Form>
        </Modal>
    );
  }
}

export default Edit;
