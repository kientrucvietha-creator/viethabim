import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-text">VietHa BIM</div>
          <p>Công ty Cổ phần Kiến trúc Việt Hà<br />
          40B Cầu Cốn, Trần Hưng Đạo, TP. Hải Dương</p>
          <p className="footer-contact">
            📧 info@viethabim.com &nbsp;|&nbsp; 📞 0xxx.xxx.xxx
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Sản phẩm</div>
            <Link to="/products">Thép Dầm Pro</Link>
            <Link to="/products">Thép Cột</Link>
            <Link to="/products">BIM Library</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Hỗ trợ</div>
            <Link to="/download">Download</Link>
            <Link to="/library">Thư viện BIM</Link>
            <Link to="/contact">Liên hệ</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Tài khoản</div>
            <Link to="/login">Đăng nhập</Link>
            <Link to="/register">Đăng ký</Link>
            <Link to="/dashboard">Quản lý licence</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          © 2024 Công ty Cổ phần Kiến trúc Việt Hà. All rights reserved.
        </div>
      </div>
    </footer>
  );
}