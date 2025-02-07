import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = (expanded) => {
    setMobileMenuOpen(expanded);
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <Navbar
          expanded={mobileMenuOpen}
          onToggle={handleToggle}
          expand="lg"
          variant="dark"
          className="header-navbar"
        >
          <Container className="header-container">
            <div className="header-left">
              <Link to="/" className="brand">
                <img src="/images/logo.png" alt="Queen Lounge" className="logo" />
              </Link>
            </div>
            <Navbar.Toggle aria-controls="navbar-nav" className="header-toggler" />
            <Navbar.Collapse id="navbar-nav" className="header-collapse">
              <Nav className="mx-auto header-nav">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Trang Chủ
                </NavLink>
                <NavLink to="/phong-hat" className="nav-link" activeClassName="active">
                  Phòng Hát
                </NavLink>
                <NavLink to="/su-kien" className="nav-link" activeClassName="active">
                  Sự Kiện &amp; Ưu Đãi
                </NavLink>
                <NavLink to="/khoanh-khac" className="nav-link" activeClassName="active">
                  Khoảnh Khắc
                </NavLink>
                <NavLink to="/tin-tuc" className="nav-link" activeClassName="active">
                  Tin Tức
                </NavLink>
                <NavLink to="/lien-he" className="nav-link" activeClassName="active">
                  Liên Hệ
                </NavLink>
              </Nav>
              <Nav className="header-right">
                <a
                  href="https://www.facebook.com/QueenPalaceDaNang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/@queenkaraokettnb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-play"></i>
                </a>
                <a
                  href="https://www.instagram.com/queenpalace.karaoke/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Header;
