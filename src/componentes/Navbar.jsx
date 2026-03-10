import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo_sem_fundo from '../img/logo_sem_fundo.png'
import { Link } from 'react-router-dom';
import { faBars, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export default function Navbar() {
  const [show, setshow] = useState (false);
  return (
       <div className="nav">
        <div className='inner-content'>
        <img src={logo_sem_fundo} alt='logo wm'className='logotipo'></img>
        <nav className={`${show && "show"}`}>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/produtos">Produtos</Link>
            </li>
            <li>
              <Link to="/serviços">Serviços</Link>
            </li>
            <li>
              <Link to="/contato">Contato</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/login">Entrar</Link>
            </li>
          </ul>
        </nav>
        <div className='nav-icon-container'>
          <div className='search-input-conteiner'>
              <input type='search' placeholder='Procurar'/>
              <FontAwesomeIcon icon={faSearch}/>
          </div>
          <button className='shopping-cart'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            <div className='products-count'>0</div>
          </button>
          <button className='menu-button' onClick={() => setshow(!show)}>
              <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
        </div>
      </div>
  )
}
