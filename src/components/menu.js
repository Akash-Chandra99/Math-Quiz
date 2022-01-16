import React from 'react'
import './menu.css';



function Menu({ setGameState,noOfQuestion,operandRange, setNoOfQuestion, setUserName, setOperandRange }) {

    return (
        <div>
            <div className="form-group">
                <label>Enter Your Name:</label><br/>
                <input
                    type="text"
                    placeholder="Ex. Akash"
                    className="form-control"
                    onChange={(event) => {
                    setUserName(event.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Enter No. of question:</label><br/>
                <input
                    className="form-control"
                    type="number"
                    value={noOfQuestion}
                    min={1}
                    onChange={(event) => {
                    setNoOfQuestion(event.target.value);
                    }}
                />
            </div>
            <div className="form-group">
                <label>Enter No. of Operands(between 9 and 15):</label><br/>
                <input
                    className="form-control"
                    type="number"
                    value={operandRange}
                    min={9}
                    max={15}
                    onChange={(event) => {
                    setOperandRange(event.target.value);
                    }}
                />
            </div>
         
            <button className="btn btn-primary"
                onClick={() => {
                    if(noOfQuestion > 0 && operandRange >= 9){
                        setGameState("playing");
                    }
                    else{
                        alert("Provide valid input. No. of question should be greater 0 and operand range should be minumum 9");
                    }
                }}
            >
                Start Quiz
            </button>
            {/* <p>Note: <span className="highlight-text">write "undefined" in case of number / 0</span> </p> */}
        </div>
    )
}

export default Menu;
