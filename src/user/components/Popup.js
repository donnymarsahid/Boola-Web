import React from 'react';

const Popup = () => {
  return (
    <div className="fixed-top popup d-flex align-items-center ">
      <div class="container-popup d-flex justify-content-between">
        <div class="text">
          <h2>DAPATKAN DISCOUNT HINGGA 10%</h2>
          <h3>DENGAN MELAKUKAN BOOKING SEBANYAK 3X SECARA ONLINE</h3>
        </div>
        <div class="button-download d-flex">
          <button>DOWNLOAD SEKARANG</button>
          <div class="close d-flex align-items-center ms-4">
            <p class="close-text">X</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
