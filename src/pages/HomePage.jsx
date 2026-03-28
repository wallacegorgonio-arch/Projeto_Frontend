import React from 'react'
import Header from '../componentes/Header'
import SidebarCart from '../componentes/SidebarCart'
import ProductList from '../componentes/ProductList'
import ExclusiveSection from '../componentes/ExclusiveSection'
import DepoimentosList from '../componentes/DepoimentosList'

export default function HomePage({
  products,
  showSidebarCart,
  setShowSidebarcart
}) {
  return (
    <>
          <Header/>
          <SidebarCart
             setShowSidebarcart={setShowSidebarcart}
             showSidebarCart={showSidebarCart}
          />
          <div className='page-inner-content'>
             <div className='section-title'>
                <h3>Produtos Selecionados</h3>
                <div className='underline'></div>
             </div>
             <div className='main-content'>
              <ProductList products={products} />
             </div>
          </div>
         <ExclusiveSection/>
         <DepoimentosList/>
    </>
  );
}
