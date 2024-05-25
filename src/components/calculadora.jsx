import React, { useState } from 'react';
import './styles/calculadora.css';

function Calculadora() {
    const [result, setResult] = useState('');

    const clearDisplay = () => {
        setResult('');
    };

    const deleteLast = () => {
        setResult(result.slice(0, -1));
    };

    const appendCharacter = (character) => {
        setResult(result + character);
    };

    const calculateResult = () => {
        try {
            setResult(Function('"use strict";return (' + result + ')')().toString());
        } catch {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                <input type="text" value={result} disabled ></input>
            </div>
            <div className="buttons">
                <button onClick={clearDisplay}>C</button>
                <button onClick={deleteLast}>←</button>
                <button onClick={() => appendCharacter('/')}>/</button>
                <button onClick={() => appendCharacter('*')}>*</button>

                <button onClick={() => appendCharacter('7')}>7</button>
                <button onClick={() => appendCharacter('8')}>8</button>
                <button onClick={() => appendCharacter('9')}>9</button>
                <button onClick={() => appendCharacter('-')}>-</button>

                <button onClick={() => appendCharacter('4')}>4</button>
                <button onClick={() => appendCharacter('5')}>5</button>
                <button onClick={() => appendCharacter('6')}>6</button>
                <button onClick={() => appendCharacter('+')}>+</button>

                <button onClick={() => appendCharacter('1')}>1</button>
                <button onClick={() => appendCharacter('2')}>2</button>
                <button onClick={() => appendCharacter('3')}>3</button>
                <button onClick={calculateResult} className="equal">=</button>

                <button onClick={() => appendCharacter('0')} className="zero">0</button>
                <button onClick={() => appendCharacter('.')}>.</button>
            </div>
        </div>
    );
}

export default Calculadora;
