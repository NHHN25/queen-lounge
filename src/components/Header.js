import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router'; // <-- add this import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const router = useRouter(); // <-- add router hook
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
              <Link legacyBehavior href="/" passHref>
                <a className="brand">
                  <img src="/images/logo.png" alt="Queen Acoustic" className="logo" />
                </a>
              </Link>
            </div>
            <Navbar.Toggle aria-controls="navbar-nav" className="header-toggler" />
            <Navbar.Collapse id="navbar-nav" className="header-collapse">
              <Nav className="mx-auto header-nav">
                <Link legacyBehavior href="/" passHref>
                  <Nav.Link>Trang Chủ</Nav.Link>
                </Link>
                <NavDropdown title="Giới Thiệu" id="nav-dropdown-gioi-thieu">
                  <Link legacyBehavior href="/gioi-thieu/ca-si" passHref>
                    <NavDropdown.Item>Ca sĩ</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/gioi-thieu/ban-nhac" passHref>
                    <NavDropdown.Item>Ban nhạc</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/gioi-thieu/bien-tap-chuong-trinh" passHref>
                    <NavDropdown.Item>Biên tập chương trình</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/queen-acoustic" passHref>
                    <NavDropdown.Item className="gold-text">Queen Acoustic</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/gioi-thieu/he-thong-queen" passHref>
                    <NavDropdown.Item>Hệ thống Queen</NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <NavDropdown title="Lịch diễn dự kiến" id="nav-dropdown-lich">
                  <Link legacyBehavior href="/lich-dien-du-kien/lich-theo-ca-si" passHref>
                    <NavDropdown.Item>Lịch theo ca sĩ</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/lich-dien-du-kien/lich-theo-tuan-thang" passHref>
                    <NavDropdown.Item>Lịch theo tuần/tháng</NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <NavDropdown title="Tin tức" id="nav-dropdown-tin-tuc">
                  <Link legacyBehavior href="/tin-tuc/kham-pha" passHref>
                    <NavDropdown.Item>Khám phá</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/tin-tuc/tuyen-dung" passHref>
                    <NavDropdown.Item>Tuyển dụng</NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <NavDropdown title="Liên Hệ" id="nav-dropdown-lien-he">
                  <Link legacyBehavior href="/lien-he" passHref>
                    <NavDropdown.Item>Thông Tin Liên Hệ</NavDropdown.Item>
                  </Link>
                  <Link legacyBehavior href="/lien-he/dia-chi" passHref>
                    <NavDropdown.Item>Địa Chỉ</NavDropdown.Item>
                  </Link>
                </NavDropdown>
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
