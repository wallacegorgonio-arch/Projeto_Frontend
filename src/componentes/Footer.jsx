import React from 'react'
import logo_sem_fundo from '../img/logo_sem_fundo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
        <div className="pagerinner-content content">
            <div className="download-options">
                <p>Baixe nossa aplicação</p>
                <p>Baixe a nossa aplicação para Android e iOS</p>
              <div>
                <img src="/images/app-store.png" alt="App Store download" />
                <img src="/images/play-store.png" alt="Play Store download" />
              </div>
            </div>
            <div className="logo-footer">
                <img src={logo_sem_fundo} alt='logo wm'className='logotipo'></img>
                <p>Nosso objetivo é ajudar pessoas comuns a ter acesso a produtos de qualidade, proporcionando uma experiência única de navegação, onde tudo esta ao alcance de um click.</p>
            </div>
            <div className="links">
                <h3>Links Úteis</h3>
                <ul>
                    <li><Link to="">Cupons</Link></li>
                    <li><Link to="">Blog posts</Link></li>
                    <li> <Link to="">Políticas</Link></li>
                    <li><Link to="">Torne-se afiliado</Link></li>
                </ul>
            </div>
        </div>
         <div className="page-inner-content">
            <hr />
            <p className='copyright'>Copyright 2026 - WM TELEFONIA E INFORMÁTICA - Todo os Direitos Reservados</p>
         </div>
    </footer>
  )
}
