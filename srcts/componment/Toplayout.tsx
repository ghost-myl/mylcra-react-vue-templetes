import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

type propsTyoe={
  MenuList: Function,
  children: Element
}

const TopLayout = (props: propsTyoe) => {
  const { MenuList, children } = props;
  return (
    <Layout className="layout">
      <Header>
        <div className="tolpogo" />
        {MenuList()}
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default TopLayout;
