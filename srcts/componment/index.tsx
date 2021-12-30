import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import TopLayout from './Toplayout';
import Leftlayout from './Leftlayout';
import { AppstoreOutlined } from '@ant-design/icons';
const type = 2;
const { SubMenu } = Menu;

type urlPath = {
  path:string,
  title:string
}

type propsType={
  menu:Object[],
  children:any
}

type menuchildren={
  path:string,
  title:string
  children:Object[]
}

type menuType={
  key:number
}

const LayoutMond = (props:propsType) => {
  const navigate = useNavigate();

  const [selectKeys, setselectKeys] = useState([
    `/${window.location.hash.replace('#', '').split('/')[1]}`,
  ]);

  const { menu, children } = props;

  const changeMennu = (props:menuType) => {
    console.log(props,'props');
    navigate(props.key);
    setselectKeys([`${props.key}`]);
  };

  const subMenu = (children:menuchildren) => {
    return (
      <SubMenu
        key={children.path}
        icon={<AppstoreOutlined />}
        title={children.title}
      >
        {children.children.map((item: urlPath) => (
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
      onClick={changeMennu}
      mode={type === 1 ? 'horizontal' : 'inline'}
      selectedKeys={[window.location.hash.replace('#', '') || '/']}
    >
      {menu.map((item:{children:Object[],icon:Element,path:string,title:string}) => {
        return item.children && item.children.length > 0 ? (
          subMenu(item)
        ) : (
          <Menu.Item
            icon={item.icon} key={item.path}>
            {item.title}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return type === 1 ? (
    <TopLayout MenuList={MenuList} children={children} />
  ) : (
    <Leftlayout MenuList={MenuList} children={children} />
  );
};

export default LayoutMond;
