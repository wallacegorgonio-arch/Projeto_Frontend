import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SidebarProduct() {
  return (
    <div className='sidebar-product'> 
        <div className="left-side">
            <button className='remove-product-btn'>
                <FontAwesomeIcon icon={faXmark}/>
            </button>
            <div className="detalhes">
            <h4>Samsung Galaxy S23 Ultra 1TB</h4>
            <p>R$ 11.000,00</p>
             <input type="number" min={1} max={100} />
             <p className='price-sum'>
                 <b>Soma: </b> R$ 33.000,00
             </p>
        </div>
        </div>
        <div className="right-side">
            <img src="/images/products/product-9.png" alt="" />
        </div>
    </div>
  )
}
