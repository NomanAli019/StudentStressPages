import { Link } from "wouter";

interface HeroProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
  showButtons?: boolean;
}

export default function Hero({ title, subtitle, highlightText, showButtons = false }: HeroProps) {
  const renderTitle = () => {
    if (highlightText) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}<span>{highlightText}</span>{parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="hero" data-testid="hero">
      <div className="floating-shape shape-1"></div>
      <div className="floating-shape shape-2"></div>
      <div className="floating-shape shape-3"></div>
      
      <div className="container">
        <div className="hero-content animate">
          <h1>{renderTitle()}</h1>
          {subtitle && <p>{subtitle}</p>}
          
          {showButtons && (
            <div className="hero-buttons">
              <Link href="/chapter/4.1?stress=moderate" data-testid="button-get-started">
                <button className="btn btn-primary">Get Started</button>
              </Link>
              <Link href="/about" data-testid="button-learn-more">
                <button className="btn btn-secondary">Learn More</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
