import React, {useState} from "react";
import "./eightball.css";

const EightBall = (props) => {
    const [EightBallText, setEightBallText] = useState({msg: "Click here", color: "blue"});
    const handleClick = () => {
        const ridx = Math.floor(Math.random() * props.answers.length);
        setEightBallText(props.answers[ridx])
    }
    return (
        <div onClick={handleClick} className={`eightball ${EightBallText.color}`}>
            <p className={"eightball-text"} >
                {EightBallText.msg}
            </p>
        </div>
    )
}

export default EightBall;