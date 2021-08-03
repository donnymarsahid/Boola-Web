import React from 'react';
import logoBoola from '../assets/img/logo-boola.png';

const Navbar = () => {
  return (
    <>
      <nav class="shadow-sm fixed-top d-flex align-items-center">
        <div class="container-navbar d-flex justify-content-between align-items-center m-auto">
          <div class="logo">
            <img src={logoBoola} alt="logo-boola" width="90px" />
          </div>
          <div class="navbar-link">
            <ul class="d-flex">
              <li class="link">BERANDA</li>
              <li class="link">BERITA</li>
              <li class="link">TENTANG KAMI</li>
              <li class="link">KONTAK KAMI</li>
              <li>
                <button>GABUNG JADI MITRA</button>
              </li>
            </ul>
          </div>
          <div class="hamburger-menu d-flex align-items-center">
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
              <li>BERANDA</li>
              <li>BERITA</li>
              <li>TENTANG KAMI</li>
              <li>KONTAK KAMI</li>
              <li>
                <button>GABUNG JADI MITRA</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
