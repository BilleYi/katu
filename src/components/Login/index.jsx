import React from "react"
import { Form, Button, Input, message } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { StyledPanel } from "./style"

export default function Login() {

  const navigate = useNavigate()

  const onFinish = (values) => {
    axios
      .post(
        `/users/login`,
        {
          username: values.username,
          password: values.password
        }
      )
      .then((res) => {
        if (res.data.code !== 200) {
          message.error("用户名或密码不匹配")
        } else {
          message.error("登录成功")
          localStorage.setItem("token", JSON.stringify(res.data.data.token))
          navigate('/')
        }
      })
  }

  return (
    <StyledPanel>
      <div className="formContainer">
        <div className="logintitle">请登录</div>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="请输入账号"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="请输入密码"
              autoComplete="off"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </StyledPanel>
  )
}
