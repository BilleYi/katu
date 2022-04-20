import { Card } from 'antd'
import "./style.css"

const { Meta } = Card

const Posts = function () {


  return (

    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  )
}

export default Posts
