import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function About() {
  return (
    <>
      <Header />
      <Hero 
        title="About Sentellect"
        subtitle="Personalizing Learning Through Emotions"
      />
      
      <main>
        <section style={{ padding: "80px 0" }}>
          <div className="container">
            <div className="card animate">
              <h2>Our Mission</h2>
              <p>
                Sentellect is an innovative educational platform designed to improve student learning 
                experiences by adapting content based on emotional states. We recognize that stress 
                levels significantly impact learning effectiveness, and our platform adjusts accordingly.
              </p>
              <p>
                By personalizing educational content to match students' stress levels, we create a 
                more supportive and effective learning environment that helps students succeed.
              </p>
            </div>

            <div className="section-title" style={{ marginTop: "60px" }}>
              <h2>Key Features</h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
              <div className="card animate delay-1" data-testid="feature-adaptive">
                <h3><i className="fas fa-brain"></i> Adaptive Content</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Stress-level responsive lessons
                  </li>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Personalized pacing
                  </li>
                  <li style={{ padding: "10px 0" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Dynamic difficulty adjustment
                  </li>
                </ul>
              </div>

              <div className="card animate delay-2" data-testid="feature-interactive">
                <h3><i className="fas fa-gamepad"></i> Interactive Learning</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Step-by-step solutions
                  </li>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Practice quizzes
                  </li>
                  <li style={{ padding: "10px 0" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Real-time feedback
                  </li>
                </ul>
              </div>

              <div className="card animate delay-3" data-testid="feature-support">
                <h3><i className="fas fa-heart"></i> Student Well-being</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Self-care reminders
                  </li>
                  <li style={{ padding: "10px 0", borderBottom: "1px dashed var(--gray)" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Stress-aware content
                  </li>
                  <li style={{ padding: "10px 0" }}>
                    <i className="fas fa-check" style={{ color: "var(--secondary)", marginRight: "10px" }}></i>
                    Encouraging feedback
                  </li>
                </ul>
              </div>
            </div>

            <div className="card animate delay-4" style={{ marginTop: "40px" }}>
              <h2>How It Works</h2>
              <p>
                Sentellect uses a combination of emotional recognition and adaptive algorithms to 
                create personalized learning experiences. The platform offers different versions of 
                the same content, optimized for various stress levels:
              </p>
              <ul>
                <li><strong>High Stress:</strong> Simplified content, more encouragement, step-by-step guidance</li>
                <li><strong>Moderate Stress:</strong> Balanced approach with clear explanations</li>
                <li><strong>Low Stress:</strong> Challenging content with opportunities for deeper exploration</li>
              </ul>
            </div>

            <div className="self-care animate delay-4" style={{ marginTop: "50px" }}>
              <h4>🌟 Our Commitment</h4>
              <p>We believe every student deserves a learning experience that supports their emotional and academic needs.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
