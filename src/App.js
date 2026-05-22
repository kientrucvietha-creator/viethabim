import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

const Placeholder = ({ title }) => (
  <div style={{ padding: '80px 24px', textAlign: 'center', color: '#999' }}>
    <h2 style={{ fontSize: 24, marginBottom: 8 }}>{title}</h2>
    <p>Trang này đang được phát triển...</p>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Placeholder title="Sản phẩm" />} />
        <Route path="/library" element={<Placeholder title="Thư viện BIM" />} />
        <Route path="/download" element={<Placeholder title="Download" />} />
        <Route path="/contact" element={<Placeholder title="Liên hệ" />} />
        <Route path="/login" element={<Placeholder title="Đăng nhập" />} />
        <Route path="/register" element={<Placeholder title="Đăng ký" />} />
        <Route path="/dashboard" element={<Placeholder title="Dashboard" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}