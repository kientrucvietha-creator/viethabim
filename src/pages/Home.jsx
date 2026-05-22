import { Link } from 'react-router-dom';
import './Home.css';

const PRODUCTS = [
  {
    badge: 'Phổ biến nhất',
    name: 'Thép Dầm Pro',
    desc: 'Tự động bố trí cốt thép dầm theo TCVN, xuất bản vẽ thi công chính xác',
    price: '500.000đ',
    unit: '/ tháng',
    featured: true,
  },
  {
    badge: 'Mới',
    name: 'Thép Cột',
    desc: 'Bố trí thép cột tự động, kiểm tra điều kiện neo đặt theo tiêu chuẩn',
    price: '400.000đ',
    unit: '/ tháng',
    featured: false,
  },
  {
    badge: 'Thư viện',
    name: 'BIM Library',
    desc: 'Thư viện Family Revit chuẩn Việt Nam, cập nhật liên tục theo thực tế',
    price: 'Miễn phí',
    unit: '',
    featured: false,
  },
];

const FEATURES = [
  { icon: '⚡', title: 'Tiết kiệm 70% thời gian', desc: 'Tự động hoá tác vụ lặp lại, từ bố trí thép đến xuất bản vẽ' },
  { icon: '📐', title: 'Chuẩn TCVN', desc: 'Tuân thủ tiêu chuẩn xây dựng Việt Nam, không lo sai sót kỹ thuật' },
  { icon: '🇻🇳', title: 'Hỗ trợ tiếng Việt', desc: 'Giao diện & tài liệu hoàn toàn bằng tiếng Việt, dễ sử dụng' },
  { icon: '🔄', title: 'Cập nhật liên tục', desc: 'Tính năng mới mỗi tháng, theo sát nhu cầu kỹ sư thực tế' },
];

const STATS = [
  { num: '500+', label: 'Kỹ sư đang dùng' },
  { num: '10+', label: 'Addin & công cụ' },
  { num: '3+', label: 'Năm kinh nghiệm' },
];

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="container hero-inner">
          <p className="hero-eyebrow">Công ty Cổ phần Kiến trúc Việt Hà</p>
          <h1 className="hero-title">
            Addin Revit chuyên nghiệp<br />
            <span>cho kỹ sư Việt Nam</span>
          </h1>
          <p className="hero-desc">
            Tự động hoá bố trí thép, thống kê vật liệu và quản lý BIM —
            tiết kiệm 70% thời gian thiết kế, tăng độ chính xác tuyệt đối.
          </p>
          <div className="hero-actions">
            <Link to="/download" className="btn btn-white btn-lg">
              ⬇ Download miễn phí
            </Link>
            <Link to="/products" className="btn btn-ghost btn-lg">
              ▶ Xem demo
            </Link>
          </div>
        </div>
        <div className="hero-pattern" aria-hidden="true" />
      </section>

      <section className="stats-bar">
        <div className="container stats-inner">
          {STATS.map(s => (
            <div key={s.label} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sản phẩm nổi bật</h2>
            <p className="section-sub">Công cụ BIM tự động hoá cho Revit, được kỹ sư tin dùng</p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map(p => (
              <div key={p.name} className={`product-card ${p.featured ? 'featured' : ''}`}>
                {p.featured && <div className="featured-badge">⭐ Phổ biến nhất</div>}
                <span className="product-tag">{p.badge}</span>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-desc">{p.desc}</p>
                <div className="product-price">
                  {p.price} <span>{p.unit}</span>
                </div>
                <Link to="/products" className="btn btn-outline" style={{marginTop: '16px', width: '100%', justifyContent: 'center'}}>
                  Xem chi tiết →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tại sao chọn VietHa BIM?</h2>
            <p className="section-sub">Được xây dựng bởi kỹ sư, cho kỹ sư Việt Nam</p>
          </div>
          <div className="features-grid">
            {FEATURES.map(f => (
              <div key={f.title} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <h2>Sẵn sàng tối ưu quy trình BIM?</h2>
          <p>Dùng thử miễn phí 14 ngày, không cần thẻ tín dụng</p>
          <div className="cta-actions">
            <Link to="/register" className="btn btn-white btn-lg">Bắt đầu miễn phí</Link>
            <Link to="/contact" className="btn btn-ghost btn-lg">Liên hệ tư vấn</Link>
          </div>
        </div>
      </section>

    </div>
  );
}