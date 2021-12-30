import React from 'react';
import { render } from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import App from './app.jsx';

render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>,
  document.getElementById('app'), // app为html文件中的id
);

if (module.hot) {
  module.hot.accept();
}
