import { faMoneyBill, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SidebarProduct from './SidebarProduct'
import { Link } from 'react-router-dom'

export default function SidebarCart({setShowSidebarcart, showSidebarCart}) {
  return (
    <aside className={`sidebar-cart ${showSidebarCart && "show"}`}>
        <div className="top">
            <h3>Seu carrinho</h3>
            <button>
          <FontAwesomeIcon icon={faXmark}/>
        </button>
        </div>
        <div className="sidebar-product-list">
            <SidebarProduct/>
            <SidebarProduct/>
            <SidebarProduct/>
        </div>
        <div className="total-container">
            <b>Total: </b> R$ 33.000,00
        </div>
        <Link to='/cart/checkout' className='btn-icon'>
            <span>Concluir compra</span>
            <FontAwesomeIcon icon={faMoneyBill}/>
         </Link>
         <i>Seu carrinho está vazio</i>
    </aside>
  )
}
