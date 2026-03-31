import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page section">
      <div className="container center-text">
        <h1>404</h1>
        <p className="lead">找不到此頁面，請返回首頁繼續瀏覽。</p>
        <Link to="/" className="btn">
          回到首頁
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
