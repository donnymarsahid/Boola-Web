import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer class="d-flex align-items-center">
        <div class="container-footer">
          <div class="row">
            <div class="col-md-4 call">
              <p>HUBUNGI KAMI</p>
              <p>
                <a href="/">
                  Hub : 0838-7223-9021 <br />
                </a>
                <a href="/">Email : boolaolahraga@gmail.com</a>
              </p>
              <ul className="p-0">
                <li>
                  <Link to="/" className="link-footer">
                    <p>Syarat & Ketentuan</p>
                  </Link>
                </li>
                <Link to="/" className="link-footer">
                  <p>Kebijakan Privasi</p>
                </Link>
              </ul>
            </div>
            <div class="col-md-4 text-center sosmed">
              <p>IKUTI KAMI</p>
              <a href="http://instagram.com/boola_olahraga">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="http://facebook.com/boolaolahraga">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="http://www.twitter.com/boola_olahraga">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="col-md-4 footer-menu">
              <p>FOOTER MENU</p>
              <ul>
                <li>
                  <Link to="/" className="link-footer">
                    <p>Tentang Kami</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-footer">
                    <p>Kontak Kami</p>
                  </Link>
                </li>
                <li>
                  <Link to="/" className="link-footer">
                    <p>Berita</p>
                  </Link>
                </li>
              </ul>
            </div>
            <p class="text-center mt-5">&copy; copyright 2021 | BOOLA all right reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
