import React from 'react';
import Layout from '../componment';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Goods from '../pages/goods';
import NotFound from '../pages/404';
import { menuList } from '../static';
import './index.css';

function App() {
  return (
    <HashRouter>
      <Layout menu={menuList}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="b/b" element={<Goods />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;
