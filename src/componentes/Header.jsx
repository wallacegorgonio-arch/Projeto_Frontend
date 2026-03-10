import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import cabecalho_image from '../img/cabecalho_image.png'

export default function Header() {
  return (
    <header>
        <div className='inner-content'>
                <div className="left-side">
                    <h2>Dê um novo estilo ao seu trabalho!</h2>
                    <p>Sucesso nem sempre tem a ver com grandeza. Tem haver com consistencia. Trabalho duro consistente supera o sucesso. A grandeza virá.</p>
                    <Link to='/produtos' className='see-more-btn'>
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </Link>
                </div>
                <div className="right-side">
                    <img src={cabecalho_image} alt='produtos' className='img-side'/>
                </div>
            </div>
    </header>
  )
}
