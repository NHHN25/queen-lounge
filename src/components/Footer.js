// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-container">
        <div className="footer-content">
          <div className="footer-social">
            <a href="https://www.facebook.com/QueenPalaceDaNang" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="https://www.youtube.com/@queenkaraokettnb" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play"></i>
            </a>
            <a href="https://www.instagram.com/queenpalace.karaoke/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} Queen Lounge. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
