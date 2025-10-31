import React, { useRef, useState } from 'react'
import "./Quiz-app.css"
import quiz from '../../assets/Data'
export default function Quiz_app() {
    const [index, setindex] = useState(0)
    const [Quiz, setQuiz] = useState(quiz[index])
    const [score, setscore] = useState(0)
    const [lock, setlock] = useState(false)
    const [li, setli] = useState(true)
    const option1 = useRef();
    const option2 = useRef();
    const option3 = useRef();
    const option4 = useRef();

const restart = () => {
    setindex(0)
    setscore(0)
    setli(true)
}

    const increaseindex = () => {
     

        if (index < quiz.length - 1) {
            setindex(index + 1);
            setQuiz(quiz[index + 1])
            setlock(false);
            option1.current.style.backgroundColor = "white";
            option2.current.style.backgroundColor = "white";
            option3.current.style.backgroundColor = "white";
            option4.current.style.backgroundColor = "white";
            option1.current.style.color = "black";
            option2.current.style.color = "black";
            option3.current.style.color = "black";
            option4.current.style.color = "black";
            
        }
        else if (index === quiz.length -1) {
            setli(false)
        }

    }

    let correctOption = [option1, option2, option3, option4]
    // lete create a controlling function?

    function lihandling(item, index) {
           if (lock) return; // 🔒 stops clicks after one selection
        if (index === Quiz.correctIndex) {
            console.log("the option is correct")
            item.target.style.backgroundColor = "green";
            setscore(score + 1)
            console.log(score)
            setlock(true);
            item.target.style.color = "white";
        }
        else {
            item.target.style.backgroundColor = "red";
            item.target.style.color = "white";
            setlock(true)

            correctOption.forEach(element => {
                let current = element.current;
                let correctIndex = Quiz.correctIndex;
                if (current.innerText === Quiz.options[correctIndex]) {
                    current.style.backgroundColor = "green";
                    current.style.color = "white";
                }
            });
        }
    }

    return (
        <div className="container">
            <div className="title">
                <h1>Quiz app</h1>
            </div>
            <div className="content">
                <h2 className={li ? "" : "hidden"}>{Quiz.question}</h2>
                  <ul className={li ? "" : "hidden"}>
                    {Quiz.options.map((item, i) => (
                        <li
                            key={i}
                            ref={
                                i === 0
                                    ? option1
                                    : i === 1
                                        ? option2
                                        : i === 2
                                            ? option3
                                            : option4
                            }
                            onClick={(e) => lihandling(e, i)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
               {!li && <h2>you got {score} out of 10</h2>}
                {li ? <button onClick={() => { increaseindex() }}>Next</button>:<button onClick={() => { restart() }}>Restart</button>}
                <p>{index + 1} Question atttemp out of 10</p>
            </div>
        </div>
    )
}
