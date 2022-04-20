import { Routes, Route } from 'react-router-dom'
import { Layout, Button, Avatar } from 'antd'
import { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'

import { Posts, PostDetail, CreatePost, SearchBar } from '../../components'

const { Header, Footer, Content } = Layout

const PostsPanel = () => {
  const [visible, setVisible] = useState(false)

  const onCreate = (values) => {
    console.log('Received values of form: ', values)
    setVisible(false)
  }
  return (
    <>
      <Header
        style={{
          display: 'flex'
        }}
      >
        <SearchBar />
        <Button
          type="primary"
          onClick={() => {
            setVisible(true)
          }}
        >
          创建新帖
        </Button>
        <CreatePost
          visible={visible}
          onCreate={onCreate}
          onCancel={() => {
            setVisible(false)
          }}
        />
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/category/:categoryId" element={<Posts />} />
          <Route path="/pin-detail/:pinId" element={<PostDetail />} />
        </Routes>
      </Content>
      <Footer style={{ background: 'gray' }}>Footer</Footer>
    </>
  )
}

export default PostsPanel
