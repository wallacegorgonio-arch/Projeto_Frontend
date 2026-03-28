import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ExclusiveSection() {
  return (
    <div className='exclusive-section'>
       <div className="page-inner-content">
            <div className="content">
                <div className="left-side">
                    <h2>Smart Band 4</h2>
                <p>O Mi Smart Band 4 possui tela em AMOLED 39.9% maior que o Smart Band 3</p>
                <NavLink to='/produtos' className='see-more-btn'>
                        <span>Ver Agora</span>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </NavLink>
                </div>
                <div className="right-side">
                <img src="/images/exclusive.png" alt="Smart Band 4" />
            </div>
            </div>
            
       </div>
    </div>
  )
}
