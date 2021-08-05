import React from 'react';
import { Link } from 'react-router-dom';
import logoBoola from '../assets/img/logo-boola.png';

const Navbar = () => {
  return (
    <>
      <nav class="shadow-sm fixed-top d-flex align-items-center">
        <div class="container-navbar d-flex justify-content-between align-items-center m-auto">
          <div class="logo">
            <Link to="/">
              <img src={logoBoola} alt="logo-boola" width="90px" />
            </Link>
          </div>
          <div class="navbar-link">
            <ul class="d-flex">
              <Link to="/" className="text-decoration-none">
                <li class="link">BERANDA</li>
              </Link>
              <Link to="/" className="text-decoration-none">
                <li class="link">BERITA</li>
              </Link>
              <Link to="/" className="text-decoration-none">
                <li class="link">TENTANG KAMI</li>
              </Link>
              <Link to="/" className="text-decoration-none">
                <li class="link">KONTAK KAMI</li>
              </Link>
              <Link to="/">
                <li>
                  <button>GABUNG JADI MITRA</button>
                </li>
              </Link>
            </ul>
          </div>
          <div class="hamburger-menu d-flex align-items-center" style={{ cursor: 'pointer' }}>
            <i class="fas fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop"></i>
          </div>
        </div>
        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
          <div class="offcanvas-header border-bottom">
            <img src={logoBoola} alt="logo-boola" width="75px" />
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="m-0 p-0">
              <Link to="/" className="link-navbar-mobile">
                <li>BERANDA</li>
              </Link>
              <Link to="/" className="link-navbar-mobile">
                <li>BERITA</li>
              </Link>
              <Link to="/" className="link-navbar-mobile">
                <li>TENTANG KAMI</li>
              </Link>
              <Link to="/" className="link-navbar-mobile">
                <li>KONTAK KAMI</li>
              </Link>
              <Link to="/">
                <li>
                  <button>GABUNG JADI MITRA</button>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
