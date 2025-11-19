import { Link, useLocation } from "wouter";

export default function Header() {
  const [location] = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <header data-testid="header">
      <div className="container">
        <nav className="navbar">
          <Link href="/" data-testid="link-logo">
            <div className="logo">
              <div className="logo-icon">S</div>
              <span className="logo-text">Sentellect</span>
            </div>
          </Link>
          
          <ul className="nav-links">
            <li>
              <Link href="/" data-testid="link-home">
                <a className={isActive("/") && location === "/" ? "active" : ""}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/chapter/4.1?stress=high" data-testid="link-chapters">
                <a className={isActive("/chapter") ? "active" : ""}>Chapters</a>
              </Link>
            </li>
            <li>
              <Link href="/quiz/1" data-testid="link-quizzes">
                <a className={isActive("/quiz") ? "active" : ""}>Quizzes</a>
              </Link>
            </li>
            <li>
              <Link href="/about" data-testid="link-about">
                <a className={isActive("/about") ? "active" : ""}>About</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
