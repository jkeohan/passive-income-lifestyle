import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='main-footer'>
      <section className='footer-info'>
        <p className='copyright'>Copyright © 2020 Our Passive Income Lifestyle</p>
        <nav>
          <ul>
            <li>Privacy Policy</li>
            <li>Affiliate Disclosure</li>
            <li>Contact</li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}

export default Footer;