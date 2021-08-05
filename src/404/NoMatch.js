import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../user/components/Footer';
import Navbar from '../user/components/Navbar';

const NoMatch = () => {
  return (
    <>
      <Navbar />
      <div class="nomatch d-flex align-items-center justify-content-center flex-column" style={{ width: '100%', height: '100vh' }}>
        <h2 className="mb-3">HALAMAN TIDAK ADA | 404</h2>
        <Link to="/">
          <button style={{ background: 'linear-gradient(#fecf28, #ffb342)', border: 'none', padding: '10px', borderRadius: '5px', color: 'white' }}>KEMBALI KE BERANDA</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NoMatch;
