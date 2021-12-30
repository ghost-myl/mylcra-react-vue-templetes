import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
} from '@ant-design/icons';

const menuList = [
  {
    path: '/',
    icon: <AppstoreOutlined />,
    title: 'a',
  },
  {
    path: '/b',
    icon: <BarChartOutlined />,
    title: 'b',
    children: [
      {
        path: '/b/a',
        icon: <CloudOutlined />,
        title: 'ba',
      },
      {
        path: '/b/b',
        icon: <ShopOutlined />,
        title: 'dd',
      },
    ],
  },
];

export { menuList };
