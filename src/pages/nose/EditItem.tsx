import React from 'react';
import { List, Typography, Form, Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css'
import Axios from 'axios'

interface IProps {
  groupID: string | undefined,
  relateID: string | undefined,
  refresh: any
}

interface IState {
  visible: boolean,
  groupName: string,
  config: string,
  modeID: string,
  content: string
}

class EditItem extends React.Component<IProps, IState> {
  state: Readonly<IState> = {
    visible: false,
    groupName: "",
    config: "",
    modeID: "0",
    content: ""
  }

  constructor(props: IProps) {
    super(props)
  }

  handleOK = () => {
    console.log(this.state.groupName)

    let data = new FormData();
    data.append('name', this.state.groupName);
    data.append('config', this.state.config);
    data.append('gid', this.props.groupID || "0")
    data.append('rid', this.props.relateID || "0")
    data.append('content', this.state.content)
    data.append('mid', this.state.modeID)

    Axios.post(process.env.REACT_APP_HOST + '/admin/item', data).then(res => {
      this.props.refresh()
    })
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
            <Form.Item label="Groupd ID:">{this.props.groupID}</Form.Item>
            <Form.Item label="Relate ID:">{this.props.relateID}</Form.Item>
            <Form.Item label="Item Name:">
              <Input onChange={
                (e: any) => {
                  this.setState({
                    groupName: e.target.value
                  })
                }
              } />
            </Form.Item>
            <Form.Item label="Config:">
              <Input.TextArea onChange={
                (e: any) => {
                  this.setState({
                    config: e.target.value
                  })
                }
                }
                autoSize={{ minRows: 2 }}
              />
            </Form.Item>
            <Form.Item label="content:">
              <Input.TextArea onChange={
                (e: any) => {
                  this.setState({
                    content: e.target.value
                  })
                }
                }
                autoSize={{ minRows: 3 }}
              />
            </Form.Item>
            <Form.Item label="mode:">
              <Input onChange={
                (e: any) => {
                  this.setState({
                    modeID: e.target.value
                  })
                }
              }/>
            </Form.Item>
          </Form>
        </Modal>
    );
  }
}

export default EditItem;
