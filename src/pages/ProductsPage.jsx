import React from 'react'
import ProductList from '../componentes/ProductList'

export default function ProductsPage({products}) {
  return (
    <>
        <div className='page-inner-content'>
            <div className='section-title'>
               <h3>Nossos Produtos </h3>
               <div className='underline'></div>
            </div>
            <div className='main-content'>
              <ProductList products={products} />
            </div>
        </div>
    </>
  );
}
