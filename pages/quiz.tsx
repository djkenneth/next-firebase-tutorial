import Image from "next/image";
import { useState } from "react";

const Quiz = () => {
  const [quizContent, setQuizContent] = useState([
    {
      step: 2,
      question: "This is where the question 1 would go?",
      answers: [
        {
          isSelected: true,
          answer: "Q1A1 This is where the possible answers would go.",
        },
        {
          isSelected: true,
          answer: "Q1A2 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q1A3 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q1A4 This is where the possible answers would go.",
        },
      ],
      correctAnswer: "Q1A2 This is where the possible answers would go.",
    },
    {
      step: 3,
      question: "This is where the question 2 would go?",
      answers: [
        {
          isSelected: false,
          answer: "Q2A1 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q2A2 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q2A3 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q2A4 This is where the possible answers would go.",
        },
      ],
      correctAnswer: "Q2A3 This is where the possible answers would go.",
    },
    {
      step: 4,
      question: "This is where the question 3 would go?",
      answers: [
        {
          isSelected: false,
          answer: "Q3A1 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q3A2 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q3A3 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q3A4 This is where the possible answers would go.",
        },
      ],
      correctAnswer: "Q3A3 This is where the possible answers would go.",
    },
    {
      step: 5,
      question: "This is where the question 4 would go?",
      answers: [
        {
          isSelected: false,
          answer: "Q4A1 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q4A2 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q4A3 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q4A4 This is where the possible answers would go.",
        },
      ],
      correctAnswer: "Q4A3 This is where the possible answers would go.",
    },
    {
      step: 6,
      question: "This is where the question 5 would go?",
      answers: [
        {
          isSelected: false,
          answer: "Q5A1 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q5A2 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q5A3 This is where the possible answers would go.",
        },
        {
          isSelected: false,
          answer: "Q5A4 This is where the possible answers would go.",
        },
      ],
      correctAnswer: "Q5A3 This is where the possible answers would go.",
    },
  ]);
  const quizLength = quizContent.length;
  const [yourAnswer, setYourAnswer] = useState("");
  const [selected, setSelected] = useState([]);
  // const [isSelectedAnswer, setIsSelectedAnswer] = useState(false);

  const handleAnswer = (e, answer, i, j) => {
    // if (e.target.tagName === "INPUT") {
    // console.log(quizContent[i].answers[j].answer);
    // }
    // console.log(e);
    let isSelectedAnswer = e.target.checked;
    let selectedAnswer = e.target.value;
    if (isSelectedAnswer) {
      console.log(e);
    }
  };

  const handleNext = () => {
    selected.push(yourAnswer);
  };

  // const getImageStar = (selectedAnswer, index) => {
  //   if (yourAnswer == selectedAnswer || selected[index] == selectedAnswer) {
  //     return (
  //       <Image
  //         src="/images/star.png"
  //         alt="Picture of the author"
  //         height={70}
  //         width={70}
  //       />
  //     );
  //   } else {
  //     return (
  //       <Image
  //         src="/images/star1.png"
  //         alt="Picture of the author"
  //         height={70}
  //         width={70}
  //       />
  //     );
  //   }
  // };
  return (
    <div className="quiz-page">
      <h1>Hello Quiz Page</h1>
      {quizContent.map((quiz, i) => {
        return (
          <div key={i}>
            <div className="quiz-holder">
              <h1>{quiz.question}</h1>
              <div className="answer-wrapper">
                {quiz.answers.map((answer, j) => {
                  return (
                    <div
                      // className="answer-holder correct-answer"
                      style={{
                        border: "1px solid black",
                        display: "block",
                      }}
                      key={j}
                      onClick={(event) => handleAnswer(event, answer, i, j)}
                    >
                      <input
                        type="radio"
                        name={`answer${i}`}
                        value={answer.answer}
                        id={answer.answer}
                        className="radioInput"
                        // onChange={(event) => handleAnswer(event, i, j)}
                      />
                      <label htmlFor={answer.answer}>
                        {/* <div className={isSelectedAnswer ? "show" : "hide"}>
                          <Image
                            src="/images/star.png"
                            alt="Picture of the author"
                            height={70}
                            width={70}
                            className="hide"
                          />
                        </div>
                        <div className={!isSelectedAnswer ? "show" : "hide"}>
                          <Image
                            src="/images/star1.png"
                            alt="Picture of the author"
                            height={70}
                            width={70}
                          />
                        </div> */}
                        {/* {getImageStar(answer.answer, j)} */}
                        {quizContent[i].answers[j].isSelected ? (
                          <Image
                            src="/images/star.png"
                            alt="Picture of the author"
                            height={70}
                            width={70}
                            className="image1"
                          />
                        ) : (
                          <Image
                            src="/images/star1.png"
                            alt="Picture of the author"
                            height={70}
                            width={70}
                            className="image2"
                          />
                        )}
                        {answer.answer}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Quiz;
