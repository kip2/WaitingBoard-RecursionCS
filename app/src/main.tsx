import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'sanitize.css'
import ProductPage from './components/pages/ProductPage'
import ProductInformationTemplate from './components/template/ProductInfomationTemplate'
import FavoriteTemplate from './components/template/FavoriteTemplate'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ProductPage /> */}
    {/* <ProductInformationTemplate /> */}
    <FavoriteTemplate />
  </React.StrictMode>,
)
