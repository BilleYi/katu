// 使用axios用于对数据的请求
import axios from 'axios';

// 可以进行全局默认配置
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common.Authorization = localStorage.getItem('token') || '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = true; // 允许跨域

// 创建axios实例
const httpRequest = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 5000,
});

// 创建请求的拦截器,添加token
httpRequest.interceptors.request.use((request) => {
  request.headers.Authorization = localStorage.getItem('token') || '';
  return Promise.resolve(request);
}, (error) => Promise.reject(error));

// 创建响应的拦截器
httpRequest.interceptors.response.use((response) => {
  let res = null;

  // 对相应的数据进行过滤
  if (response.status === 200) {
    if (response.data && response.data.err === 0) {
      res = response.data.data;
    } else if (response.data.err === -1) {
      return alert('token无效');
    }
  } else {
    return alert('请求失败');
  }

  return res;
}, (error) => Promise.reject(error));

export default httpRequest;
