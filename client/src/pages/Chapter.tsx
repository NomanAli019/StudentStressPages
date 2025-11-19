import { useLocation, useRoute, Link } from "wouter";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Chapter() {
  const [, params] = useRoute("/chapter/:chapterNumber");
  const [location] = useLocation();
  const searchParams = new URLSearchParams(location.split("?")[1]);
  const stressLevel = searchParams.get("stress") || "moderate";
  const chapterNumber = params?.chapterNumber || "4.1";

  const [activeStep, setActiveStep] = useState<number | null>(null);

  // TODO: remove mock functionality - Replace with real chapter content from API
  const getChapterContent = () => {
    const stressMessages = {
      high: {
        welcome: "Take a deep breath! We'll go through this step by step.",
        encouragement: "You're doing great! Let's break this down together.",
      },
      moderate: {
        welcome: "Let's explore coordinate geometry together.",
        encouragement: "Great progress! Keep going.",
      },
      low: {
        welcome: "Ready for a challenge? Let's dive into coordinate geometry.",
        encouragement: "Excellent work! Ready for more?",
      },
    };

    return stressMessages[stressLevel as keyof typeof stressMessages] || stressMessages.moderate;
  };

  const content = getChapterContent();

  const showStep = (step: number) => {
    setActiveStep(step);
    console.log(`Showing step ${step}`);
  };

  return (
    <>
      <Header />
      <Hero 
        title={`Chapter ${chapterNumber}: Coordinate Geometry`}
        subtitle={`Learning path: ${stressLevel.charAt(0).toUpperCase() + stressLevel.slice(1)} Stress Level`}
        highlightText="Coordinate Geometry"
      />
      
      <main>
        <section style={{ padding: "80px 0", paddingTop: "40px" }}>
          <div className="container">
            {/* Stress Level Selector */}
            <div className="card animate" data-testid="stress-selector">
              <h3>Adjust Stress Level</h3>
              <div className="step-buttons">
                <Link href={`/chapter/${chapterNumber}?stress=high`} data-testid="button-stress-high">
                  <button className={`step-btn ${stressLevel === "high" ? "active" : ""}`}>
                    High Stress
                  </button>
                </Link>
                <Link href={`/chapter/${chapterNumber}?stress=moderate`} data-testid="button-stress-moderate">
                  <button className={`step-btn ${stressLevel === "moderate" ? "active" : ""}`}>
                    Moderate
                  </button>
                </Link>
                <Link href={`/chapter/${chapterNumber}?stress=low`} data-testid="button-stress-low">
                  <button className={`step-btn ${stressLevel === "low" ? "active" : ""}`}>
                    Low Stress
                  </button>
                </Link>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="self-care animate delay-1">
              <h4>{content.welcome}</h4>
              <p>{content.encouragement}</p>
            </div>

            {/* Main Content */}
            <div className="card animate delay-2" data-testid="chapter-content">
              <h2>Introduction to Coordinate Geometry</h2>
              <p className="lead">
                {stressLevel === "high" 
                  ? "Don't worry! We'll start with the basics and move slowly. You've got this! 🌟"
                  : stressLevel === "moderate"
                  ? "Let's learn about plotting points and understanding the coordinate plane."
                  : "Let's explore the fascinating world of coordinate geometry and its applications."}
              </p>
              
              <p>
                Coordinate geometry is a branch of geometry where we use coordinates to represent 
                geometric shapes. The coordinate plane has two axes: the x-axis (horizontal) and 
                the y-axis (vertical).
              </p>

              <h3>Key Concepts</h3>
              <p>
                Every point on the plane can be represented by an ordered pair (x, y), where:
              </p>
              <ul>
                <li><strong>x</strong> represents the horizontal distance from the origin</li>
                <li><strong>y</strong> represents the vertical distance from the origin</li>
              </ul>
            </div>

            {/* Interactive Examples */}
            <div className="card animate delay-3" data-testid="interactive-examples">
              <h2>Examples</h2>
              <p>Click on the steps below to see detailed solutions:</p>
              
              <div className="step-buttons">
                <button 
                  className="step-btn" 
                  onClick={() => showStep(1)}
                  data-testid="button-step-1"
                >
                  Step 1: Plot Point (3, 4)
                </button>
                <button 
                  className="step-btn" 
                  onClick={() => showStep(2)}
                  data-testid="button-step-2"
                >
                  Step 2: Distance Formula
                </button>
                <button 
                  className="step-btn" 
                  onClick={() => showStep(3)}
                  data-testid="button-step-3"
                >
                  Step 3: Midpoint Formula
                </button>
              </div>

              {activeStep === 1 && (
                <div className="solution active" data-testid="solution-1">
                  <h4>Plotting Point (3, 4)</h4>
                  <p>
                    1. Start at the origin (0, 0)<br/>
                    2. Move 3 units to the right (x = 3)<br/>
                    3. Move 4 units up (y = 4)<br/>
                    4. Mark the point!
                  </p>
                  {stressLevel === "high" && <p><em>Great job! You're doing amazing! 🎉</em></p>}
                </div>
              )}

              {activeStep === 2 && (
                <div className="solution active" data-testid="solution-2">
                  <h4>Distance Formula</h4>
                  <p>
                    The distance between two points (x₁, y₁) and (x₂, y₂) is:<br/>
                    d = √[(x₂ - x₁)² + (y₂ - y₁)²]
                  </p>
                  <p>
                    Example: Distance between (1, 2) and (4, 6)<br/>
                    d = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5
                  </p>
                  {stressLevel === "high" && <p><em>You're making excellent progress! Keep it up! 💪</em></p>}
                </div>
              )}

              {activeStep === 3 && (
                <div className="solution active" data-testid="solution-3">
                  <h4>Midpoint Formula</h4>
                  <p>
                    The midpoint between two points (x₁, y₁) and (x₂, y₂) is:<br/>
                    M = ((x₁ + x₂)/2, (y₁ + y₂)/2)
                  </p>
                  <p>
                    Example: Midpoint of (2, 3) and (8, 7)<br/>
                    M = ((2+8)/2, (3+7)/2) = (5, 5)
                  </p>
                  {stressLevel === "high" && <p><em>Fantastic! You're understanding this really well! 🌟</em></p>}
                </div>
              )}
            </div>

            {/* Progress Indicator */}
            <div className="card animate delay-4">
              <h3>Your Progress</h3>
              <div className="progress-container">
                <div 
                  className="progress-bar" 
                  style={{ width: activeStep ? `${(activeStep / 3) * 100}%` : "0%" }}
                  data-testid="progress-bar"
                ></div>
              </div>
              <p style={{ textAlign: "center", marginTop: "10px", color: "var(--text-light)" }}>
                {activeStep ? `${activeStep} of 3 examples completed` : "Click on steps above to begin"}
              </p>
            </div>

            {/* Navigation */}
            <div className="card animate delay-4" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Link href="/" data-testid="button-back-home">
                <button className="btn btn-secondary">← Back to Home</button>
              </Link>
              <Link href="/quiz/1" data-testid="button-take-quiz">
                <button className="btn btn-primary">Take Quiz →</button>
              </Link>
            </div>

            {stressLevel === "high" && (
              <div className="self-care animate delay-4">
                <h4>💙 Remember to Take Care</h4>
                <p>If you're feeling overwhelmed, it's okay to take a break. Come back when you're ready!</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
