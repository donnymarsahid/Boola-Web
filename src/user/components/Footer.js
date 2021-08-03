import React from 'react';

const Footer = () => {
  return (
    <>
      <footer class="d-flex align-items-center">
        <div class="container-footer">
          <div class="row">
            <div class="col-md-4 call">
              <p>HUBUNGI KAMI</p>
              <p>
                Call: +62-838-7223-9021 <br />
                Email: boolaolahraga@gmail.com
              </p>
            </div>
            <div class="col-md-4 text-center sosmed">
              <p>IKUTI KAMI</p>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
            </div>
            <div class="col-md-4 footer-menu">
              <p>FOOTER MENU</p>
              <ul>
                <li>
                  <p>Tentang Kami</p>
                </li>
                <li>
                  <p>Kontak Kami</p>
                </li>
                <li>
                  <p>Berita</p>
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
