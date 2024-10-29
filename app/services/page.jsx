"use client";
import React, { useState } from "react";
import "./index.css";

// Depression, Anxiety, and Addiction Test Questions
const testQuestions = {
  depression: [
    {
      questionText: "Over the last two weeks, how often have you felt little interest or pleasure in doing things?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you felt down, depressed, or hopeless?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you had trouble falling or staying asleep, or sleeping too much?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you felt tired or had little energy?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you had a poor appetite or overeating?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you felt bad about yourself or that you are a failure or have let yourself or your family down?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you had trouble concentrating on things, such as reading the newspaper or watching television?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you moved or spoken so slowly that other people could have noticed, or the opposite—being so fidgety or restless?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you had thoughts that you would be better off dead, or of hurting yourself in some way?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "If you checked off any problems, how difficult have these problems made it for you at work, home, or with other people?",
      answerOptions: [
        { answerText: "Not difficult at all", score: 0 },
        { answerText: "Somewhat difficult", score: 1 },
        { answerText: "Very difficult", score: 2 },
        { answerText: "Extremely difficult", score: 3 },
      ],
    },
  ],
  
  anxiety: [
    {
      questionText: "Over the last two weeks, how often have you felt nervous, anxious, or on edge?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you been unable to stop or control worrying?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you worried too much about different things?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you had trouble relaxing?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you felt so restless that it was hard to sit still?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you become easily annoyed or irritable?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
    {
      questionText: "Over the last two weeks, how often have you felt afraid as if something awful might happen?",
      answerOptions: [
        { answerText: "Not at all", score: 0 },
        { answerText: "Several days", score: 1 },
        { answerText: "More than half the days", score: 2 },
        { answerText: "Nearly every day", score: 3 },
      ],
    },
  ],

  addiction: [
    {
      questionText: "What substance or behavior are you most concerned about?",
      answerOptions: [
        { answerText: "Alcohol", score: 0 },
        { answerText: "Another drug or multiple drugs", score: 1 },
        { answerText: "Another behavior (gambling, self-harm, etc.)", score: 2 },
      ],
    },
    {
      questionText: "Which of the following are you concerned about? Select all that apply.",
      answerOptions: [
        { answerText: "Alcohol", score: 1 },
        { answerText: "Cannabis", score: 1 },
        { answerText: "Nicotine", score: 1 },
        { answerText: "Benzodiazepines (e.g. Xanax, Valium)", score: 1 },
        { answerText: "Cocaine / crack", score: 1 },
        { answerText: "Fentanyl", score: 1 },
        { answerText: "Heroin", score: 1 },
        { answerText: "Prescription Opioids (e.g. OxyContin, Percocet, Vicodin)", score: 1 },
        { answerText: "Stimulants (e.g. speed, meth, Adderall, Ritalin)", score: 1 },
        { answerText: "Self-harm", score: 1 },
        { answerText: "Other (e.g. gambling, sex, internet, shopping, food, etc.)", score: 1 },
      ],
    },
  ],
};


const Services = () => {
  const [currentTest, setCurrentTest] = useState(null); // Selected test
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (scoreValue) => {
    // Add the score of the selected answer
    setScore(score + scoreValue);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < testQuestions[currentTest].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleTestSelection = (testType) => {
    setCurrentTest(testType);
    setCurrentQuestion(0); // Reset to the first question
    setScore(0); // Reset the score
    setShowScore(false); // Hide the score
  };

  return (
    <>
      <div className="bg-primaryDark w-full h-[250px]">
        <div className="pt-[150px] px-[2rem]">
          <h2 className="heading-secondary text-center" style={{ color: "white" }}>
            Mental Well-Being Test
          </h2>
        </div>
      </div>

      {/* Test Selection Section */}
      {!currentTest && (
        <section>
          <div className="test-selection">
            {/* <h1>Select a test to get started:</h1> */}
            <div className="test-buttons">
              <button className="test-btn" onClick={() => handleTestSelection("depression")}>
                Depression Test
              </button>
              <button className="test-btn" onClick={() => handleTestSelection("anxiety")}>
                Anxiety Test
              </button>
              <button className="test-btn" onClick={() => handleTestSelection("addiction")}>
                Addiction Test
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Quiz Section */}
      {currentTest && (
        <section>
          <div className="apps">
            {showScore ? (
              <div className="score-section">
                <h3>Your Score: {score}</h3>
                <p>
                  {score < 3
                    ? "You may be experiencing minimal symptoms."
                    : score < 5
                    ? "You may be dealing with some moderate symptoms."
                    : "You may be experiencing severe symptoms. Please consider seeking help."}
                </p>
                <button className="test-btn" onClick={() => setCurrentTest(null)}>
                  Back to Tests
                </button>
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/{testQuestions[currentTest].length}
                  </div>
                  <div className="question-text">{testQuestions[currentTest][currentQuestion].questionText}</div>
                </div>
                <div className="answer-section">
                  {testQuestions[currentTest][currentQuestion].answerOptions.map((answerOption, index) => (
                    <button key={index} onClick={() => handleAnswerOptionClick(answerOption.score)}>
                      {answerOption.answerText}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Upcoming AI Features in Cognitive Wellness Section */}
      <section>
        <div className="ai-features-section" style={{ marginTop: "2rem", padding: "1rem", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
          <h2 className="ai-features-title" style={{ color: "#28a745", fontWeight: "bold" }}>
            Upcoming AI Features in Cognitive Wellness
          </h2>
          <p className="ai-features-description" style={{ marginTop: "1rem" }}>
            Our team is currently working on integrating advanced AI-driven features into our Cognitive Wellness platform. These features will include personalized mental health assessments, AI-guided relaxation techniques, and intelligent wellness tracking, all designed to improve cognitive health and provide real-time insights.
          </p>
        </div>
      </section>
    </>
  );
};

export default Services;
