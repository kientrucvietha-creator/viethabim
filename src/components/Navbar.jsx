import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Logo = () => (
  <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
    <line x1="3" y1="30" x2="18" y2="6" stroke="#7B1C1C" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="8" y1="30" x2="23" y2="6" stroke="#7B1C1C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="13" y1="30" x2="28" y2="6" stroke="#7B1C1C" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="18" y1="30" x2="31" y2="10" stroke="#7B1C1C" strokeWidth="1" strokeLinecap="round"/>
    <line x1="3" y1="30" x2="31" y2="30" stroke="#7B1C1C" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const NAV_LINKS = [
  { to: '/products', label: 'Sản phẩm' },
  { to: '/library', label: 'Thư viện BIM' },
  { to: '/download', label: 'Download' },
  { to: '/contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <Logo />
          <div>
            <div className="brand-name">VietHa BIM</div>
            <div className="brand-slogan">Nối nhịp sống cho ngôi nhà thông minh</div>
          </div>
        </Link>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          {NAV_LINKS.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${pathname === l.to ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/login" className="btn btn-outline">Đăng nhập</Link>
          <Link to="/register" className="btn btn-primary">Dùng thử miễn phí</Link>
        </div>

        <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
