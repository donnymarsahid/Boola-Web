import React from 'react';
import Navbar from './components/Navbar';
import './assets/css/style.css';
import './assets/css/responsive.css';
import mockupBoola from './assets/img/mockup-boola.png';
import btnPlaystore from './assets/img/playstore.png';
import featuresDisplay from './assets/img/featuresDisplay.svg';
import featuresField from './assets/img/featuresField.svg';
import featuresArticle from './assets/img/featuresArticle.svg';
import featuresInfo from './assets/img/featuresInfo.svg';
import featuresPayment from './assets/img/featuresPayment.svg';
import featuresMitra from './assets/img/featuresMitra.svg';
import easyUse from './assets/img/easyUse.png';
import searchField from './assets/img/searchField.png';
import chooseField from './assets/img/chooseField.png';
import Footer from './components/Footer';
import Popup from './components/Popup';
import $ from 'jquery';

const User = () => {
  $(window).scroll(function () {
    let wScroll = $(this).scrollTop();
    if (wScroll > 150) {
      $('.popup').addClass('show');
    } else {
      $('.popup').removeClass('show');
    }
  });
  $('document').ready(() => {
    $('.close-text').on('click', () => {
      $('.popup').addClass('close');
    });
  });

  return (
    <>
      <title>Boola - Booking lapangan olahraga</title>
      <Navbar />
      <Popup />
      <header>
        <div class="container-header d-flex">
          <div class="content d-flex flex-column justify-content-center">
            <h2 class="pb-2">SELAMAT DATANG DIBOOLA</h2>
            <h3 class="pb-4">
              BOOKING LAPANGAN OLAHRAGA MUDAH DAN SIMPLE <br /> TENTUKAN TANGGAL DAN WAKTUNYA
            </h3>
            <div class="button">
              <img src={btnPlaystore} alt="playstore" />
              <button>GABUNG SEKARANG</button>
            </div>
          </div>
          <div class="image-header d-flex align-items-center">
            <img src={mockupBoola} alt="mockup-boola" />
          </div>
        </div>
      </header>
      <section>
        <div class="container-section">
          <h3 class="text-center">FEATURES</h3>
          <p class="text-center mb-5">Memperkenalkan fitur - fitur pada aplikasi Boola</p>
          <div class="row ">
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresDisplay} alt="display" width="70px" />
                <h3 class="pt-3 pb-1">Tampilan Sederhana</h3>
                <p>Agar enak untuk dilihat dengan tampilan warna yang halus dan menarik, kami menyediakan Tampilan sederhana agar proses booking bisa dijalankan dengan mudah dan simple untuk digunakan.</p>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresField} alt="display" width="70px" />
                <h3 class="pt-3 pb-1">Lapangan Terdekat</h3>
                <p>
                  Tersedia fitur yang bertujuan Pengguna dapat memilih dengan Mudah Lapangan yang terdekat dari Lokasi dengan Fitur GPS dan Aplikasi Boola Menyediakan Maaping Lokasi dengan Fitur Rute agar dapat mudah menemukan Lapangan.
                </p>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresArticle} alt="display" width="70px" />
                <h3 class="pt-3 pb-1">Article</h3>
                <p>Terima Informasi mengenai Lapangan Olahraga yang kami sediakan dengan Fitur Booking Online, Artikel yang berguna untuk pengguna mencari i nformasi yang diberikan Aplikasi Boola.</p>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresInfo} alt="display" width="70px" />
                <h3 class="pt-3 pb-1">Info Lapangan</h3>
                <p>Agar pengguna dengan Mudah mendapatkan Informasi Tentang Lapangan Maka Aplikasi Boola Menyediakan, Informasi Tentang Lapangan Tersebut Mulai dari Detail Lapangan/Ukuran Lapangan, Fasilitas dan Jam Operasional.</p>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresPayment} alt="display" width="70px" class="mt-3" />
                <h3 class="pt-3 pb-1">Metode Pembayaran</h3>
                <p>Sistem Booking Lapangan Olahraga dalam Aplikasi Boola, kami Menyediakan Metode Pembayaran dengan beberapa Payment Seperti transfer e-wallet ataupun virtual account.</p>
              </div>
            </div>
            <div class="col-md-4 mb-5">
              <div class="box p-4">
                <img src={featuresMitra} alt="display" width="70px" />
                <h3 class="pt-3 pb-1">Mitra</h3>
                <p>Untuk pemilik Lapangan Olahraga yang ingin Bergabung dengan Aplikasi Boola, agar Lapangannya dapat dibooking online, bisa menghubungi pihak kami.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="promo">
        <div class="container-promo d-flex flex-column justify-content-center">
          <h2>DAPATKAN POTONGAN HARGA HINGGA 10%</h2>
          <h3>DENGAN MELAKUKAN BOOKING SAMPAI DENGAN 3X SECARA ONLINE DIAPLIKASI BOOLA</h3>
        </div>
      </div>
      <div class="how-work">
        <div class="container-how-work">
          <h3 class="text-center">CARA KERJA BOOLA</h3>
          <p class="text-center ">Akses Mudah Cari Lapangan dan Booking Lapangan Online dipastikan Aman!</p>
          <div class="row">
            <div class="col-md-5">
              <img src={easyUse} alt="easyUse" />
            </div>
            <div class="col-md-7 text">
              <h3>Sangat Mudah Digunakan</h3>
              <p>Kenapa sangat Mudah? Karena Aplikasi Boola Mengutamakan kemudahan akses dalam membooking lapangan, dan Pemilihan Lapangan Terdekat.</p>
            </div>
            <div class="row flex-row-reverse">
              <div class="col-md-5">
                <img src={searchField} alt="searchField" />
              </div>
              <div class="col-md-7 text">
                <h3>Cari Lapangan dengan Mudah</h3>
                <p>Cari Lapangan dengan menggunakan Fitur GPS, untuk menetukan Lokasi dan Maaping atau Rute Lokasi Lapangan yang bertujuan Pengguna Mencari Lapangan dengan Mudah.</p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-5">
                <img src={chooseField} alt="chooseField" />
              </div>
              <div class="col-md-7 text">
                <h3>Menentukan lapangan yang kalian sukai</h3>
                <p>Agar dapat dengan mudah mendapatkan Informasi tentan Lapangan, Mulai dari Detail Lapangan seperti Fasilitas Ukuran Lapangan dan Jam Operasional.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mitra">
        <div class="container-mitra d-flex flex-column justify-content-center">
          <h2>GABUNG BERSAMA KAMI SEBAGAI MITRA LAPANGAN</h2>
          <h3>DENGAN CARA HUBUNGI PIHAK KAMI</h3>
          <button>GABUNG SEKARANG</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
