import { Link } from "wouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero 
        title="Welcome to Sentellect"
        subtitle="Personalized math learning that adapts to your stress level"
        highlightText="Sentellect"
        showButtons={true}
      />
      
      <main>
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="section-title animate delay-1">
              <h2>Choose Your Learning Path</h2>
              <p>Select chapters and quizzes tailored to your current stress level</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", marginTop: "50px" }}>
              <div className="card animate delay-2" data-testid="card-chapters">
                <h2>📚 Coordinate Geometry</h2>
                <p>Learn coordinate geometry with adaptive content that matches your stress level</p>
                <div style={{ marginTop: "20px" }}>
                  <Link href="/chapter/4.1?stress=high" data-testid="link-chapter-high">
                    <button className="btn btn-primary" style={{ marginRight: "10px", marginBottom: "10px" }}>High Stress</button>
                  </Link>
                  <Link href="/chapter/4.1?stress=moderate" data-testid="link-chapter-moderate">
                    <button className="btn btn-primary" style={{ marginRight: "10px", marginBottom: "10px" }}>Moderate</button>
                  </Link>
                  <Link href="/chapter/4.1?stress=low" data-testid="link-chapter-low">
                    <button className="btn btn-primary" style={{ marginBottom: "10px" }}>Low Stress</button>
                  </Link>
                </div>
              </div>

              <div className="card animate delay-3" data-testid="card-quizzes">
                <h2>📝 Practice Quizzes</h2>
                <p>Test your knowledge with interactive quizzes for each chapter</p>
                <div style={{ marginTop: "20px" }}>
                  <Link href="/quiz/1" data-testid="link-quiz-1">
                    <button className="btn btn-secondary" style={{ marginRight: "10px", marginBottom: "10px" }}>Quiz 1</button>
                  </Link>
                  <Link href="/quiz/2" data-testid="link-quiz-2">
                    <button className="btn btn-secondary" style={{ marginRight: "10px", marginBottom: "10px" }}>Quiz 2</button>
                  </Link>
                  <Link href="/quiz/3" data-testid="link-quiz-3">
                    <button className="btn btn-secondary" style={{ marginRight: "10px", marginBottom: "10px" }}>Quiz 3</button>
                  </Link>
                  <Link href="/quiz/4" data-testid="link-quiz-4">
                    <button className="btn btn-secondary" style={{ marginBottom: "10px" }}>Quiz 4</button>
                  </Link>
                </div>
              </div>

              <div className="card animate delay-4" data-testid="card-about">
                <h2>🎯 About Sentellect</h2>
                <p>Learn how our AI-powered platform personalizes your learning experience</p>
                <div style={{ marginTop: "20px" }}>
                  <Link href="/about" data-testid="link-learn-more">
                    <button className="btn btn-primary">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="self-care animate delay-4" style={{ marginTop: "50px" }}>
              <h4>💙 Take Care of Yourself</h4>
              <p>Remember to take breaks, stay hydrated, and don't hesitate to ask for help when you need it.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
