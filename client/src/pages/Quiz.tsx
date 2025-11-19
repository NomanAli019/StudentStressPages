import { useRoute, Link } from "wouter";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export default function Quiz() {
  const [, params] = useRoute("/quiz/:quizNumber");
  const quizNumber = params?.quizNumber || "1";

  // TODO: remove mock functionality - Replace with real quiz data from API
  const quizData: QuizQuestion[] = [
    {
      id: 1,
      question: "What are the coordinates of the origin?",
      options: ["(1, 1)", "(0, 0)", "(1, 0)", "(0, 1)"],
      correctAnswer: 1,
      explanation: "The origin is the point where the x-axis and y-axis intersect, which is at (0, 0)."
    },
    {
      id: 2,
      question: "In the point (5, -3), what is the y-coordinate?",
      options: ["5", "-3", "3", "-5"],
      correctAnswer: 1,
      explanation: "In an ordered pair (x, y), the second number is the y-coordinate. So the y-coordinate is -3."
    },
    {
      id: 3,
      question: "Which quadrant contains the point (-2, 4)?",
      options: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"],
      correctAnswer: 1,
      explanation: "Quadrant II contains points with negative x-coordinates and positive y-coordinates."
    }
  ];

  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showFeedback, setShowFeedback] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (questionId: number, answerIndex: number) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
    setShowFeedback({ ...showFeedback, [questionId]: true });
    console.log(`Question ${questionId} answered with option ${answerIndex}`);
  };

  const isCorrect = (questionId: number) => {
    const question = quizData.find(q => q.id === questionId);
    return question && answers[questionId] === question.correctAnswer;
  };

  const getScore = () => {
    const answered = Object.keys(answers).length;
    const correct = quizData.filter(q => isCorrect(q.id)).length;
    return { answered, correct, total: quizData.length };
  };

  const score = getScore();

  return (
    <>
      <Header />
      <Hero 
        title={`Quiz ${quizNumber}: Coordinate Geometry`}
        subtitle="Test your understanding of the concepts"
        highlightText={`Quiz ${quizNumber}`}
      />
      
      <main>
        <section style={{ padding: "80px 0", paddingTop: "40px" }}>
          <div className="container">
            {/* Quiz Introduction */}
            <div className="card animate" data-testid="quiz-intro">
              <h2>Chapter {quizNumber} Quiz</h2>
              <p>
                Answer the following questions to test your understanding of coordinate geometry.
                Click on your answer choice to submit.
              </p>
            </div>

            {/* Quiz Questions */}
            <div className="interactive-quiz animate delay-1" data-testid="quiz-container">
              <h4>Questions</h4>
              
              {quizData.map((question, index) => (
                <div key={question.id} className="quiz-question" data-testid={`question-${question.id}`}>
                  <p><strong>Question {index + 1}:</strong> {question.question}</p>
                  
                  <div className="quiz-options">
                    {question.options.map((option, optionIndex) => {
                      const isAnswered = answers[question.id] !== undefined;
                      const isThisAnswer = answers[question.id] === optionIndex;
                      const isCorrectAnswer = optionIndex === question.correctAnswer;
                      
                      let buttonClass = "quiz-btn";
                      if (isAnswered && isThisAnswer) {
                        buttonClass += isCorrect(question.id) ? " correct" : " incorrect";
                      }

                      return (
                        <button
                          key={optionIndex}
                          className={buttonClass}
                          onClick={() => handleAnswer(question.id, optionIndex)}
                          disabled={isAnswered}
                          data-testid={`question-${question.id}-option-${optionIndex}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {showFeedback[question.id] && (
                    <div 
                      className={`quiz-feedback ${isCorrect(question.id) ? "correct" : "incorrect"}`}
                      data-testid={`feedback-${question.id}`}
                    >
                      <strong>{isCorrect(question.id) ? "✓ Correct!" : "✗ Incorrect"}</strong>
                      <div className="quiz-rationale">
                        {question.explanation}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Score Summary */}
            {score.answered > 0 && (
              <div className="card animate delay-2" data-testid="score-summary">
                <h3>Your Progress</h3>
                <p style={{ fontSize: "1.2rem", textAlign: "center" }}>
                  <strong>{score.correct}</strong> correct out of <strong>{score.answered}</strong> answered
                  {score.answered === score.total && (
                    <span style={{ display: "block", marginTop: "10px", color: score.correct === score.total ? "var(--success)" : "var(--text-light)" }}>
                      {score.correct === score.total 
                        ? "🎉 Perfect score! Excellent work!" 
                        : `Keep practicing! You scored ${Math.round((score.correct / score.total) * 100)}%`}
                    </span>
                  )}
                </p>
                <div className="progress-container" style={{ marginTop: "20px" }}>
                  <div 
                    className="progress-bar" 
                    style={{ width: `${(score.correct / score.total) * 100}%` }}
                    data-testid="quiz-progress-bar"
                  ></div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="card animate delay-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <Link href="/chapter/4.1?stress=moderate" data-testid="button-back-chapter">
                <button className="btn btn-secondary">← Back to Chapter</button>
              </Link>
              <Link href="/" data-testid="button-home">
                <button className="btn btn-secondary">Home</button>
              </Link>
              {parseInt(quizNumber) < 4 && (
                <Link href={`/quiz/${parseInt(quizNumber) + 1}`} data-testid="button-next-quiz">
                  <button className="btn btn-primary">Next Quiz →</button>
                </Link>
              )}
            </div>

            <div className="self-care animate delay-4">
              <h4>💡 Study Tip</h4>
              <p>If you got any questions wrong, review the chapter content and try again. Learning is a process!</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
