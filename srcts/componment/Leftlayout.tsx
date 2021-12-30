import React, { useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import './index.less';

const { Header, Content, Footer, Sider } = Layout;

type propsType={
  MenuList:Function,
  children:Element
}

const Leftlayout = (prop : propsType) => {
  const { MenuList, children } = prop;
  const [collapsed, setcollapsed] = useState(false);

  const onCollapse = (collapsed:boolean) => {
    setcollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        {MenuList()}
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Leftlayout;
