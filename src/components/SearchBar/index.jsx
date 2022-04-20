import "./style.css"
import { Input } from 'antd'

const { Search } = Input

const SearchBar = function () {

  const onSearch = value => console.log(value)

  return (
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />

  )
}

export default SearchBar
