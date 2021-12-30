import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import TopLayout from './Toplayout';
import Leftlayout from './Leftlayout';
import { AppstoreOutlined } from '@ant-design/icons';

const type = 2;
const { SubMenu } = Menu;

const LayoutMond = (props) => {
  const navigate = useNavigate();

  const [selectKeys, setselectKeys] = useState([
    `/${window.location.hash.replace('#', '').split('/')[1]}`,
  ]);

  const { menu, children } = props;

  const changeMennu = (props) => {
    navigate(props.key);
    setselectKeys([`${props.key}`]);
  };

  const subMenu = (children) => {
    return (
      <SubMenu
        key={children.path}
        icon={<AppstoreOutlined />}
        title={children.title}
      >
        {children.children.map((item) => (
          <Menu.Item onClick={changeMennu} key={item.path}>
            {item.title}
          </Menu.Item>
        ))}
      </SubMenu>
    );
  };

  const MenuList = () => (
    <Menu
      defaultOpenKeys={selectKeys}
      theme="dark"
      mode={type === 1 ? 'horizontal' : 'inline'}
      selectedKeys={window.location.hash.replace('#', '') || '/'}
    >
      {menu.map((item) => {
        return item.children && item.children.length > 0 ? (
          subMenu(item)
        ) : (
          <Menu.Item onClick={changeMennu} icon={item.icon} key={item.path}>
            {item.title}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return type === 1 ? (
    <TopLayout menu={menu} MenuList={MenuList} children={children} />
  ) : (
    <Leftlayout menu={menu} MenuList={MenuList} children={children} />
  );
};

export default LayoutMond;
