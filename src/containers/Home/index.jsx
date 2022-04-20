import { Layout, Menu } from 'antd'
import { Route, Routes } from 'react-router-dom'
import { StyledHome } from './style'
import { UserProfile } from '../../components'
import PostsPanel from '../PostsPanel'

const { Sider } = Layout

export default function Home() {


    return (
        <StyledHome>
            <Layout >
                <Sider>
                    <Menu style={{ height: '100%' }} mode="vertical">
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Routes>
                        <Route path="/user-info/:userId" element={<UserProfile />} />
                        <Route path="/*" element={<PostsPanel />} />
                    </Routes>
                </Layout>
            </Layout>
        </StyledHome>
    )
}
