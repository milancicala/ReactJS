import React from 'react';
import PropTypes from 'prop-types';

export default function renderKeyboard (props) {
        return(
            <div className="buttons">
                <div className="operators">
                    <button onClick={() => props.toggleValue()}>+/-</button>
                    <button onClick={() => props.operated('+')}>+</button>
                    <button onClick={() => props.operated('-')}>-</button>
                    <button onClick={() => props.operated('*')}>&times;</button>
                    <button onClick={() => props.operated('/')}>&divide;</button>
                </div>
                <div className="leftPanel">
                    <div className="numbers">
                        <button onClick={() => props.displayInput(7)}>7</button>
                        <button onClick={() => props.displayInput(8)}>8</button>
                        <button onClick={() => props.displayInput(9)}>9</button>
                    </div>
                    <div className="numbers">
                        <button onClick={() => props.displayInput(4)}>4</button>
                        <button onClick={() => props.displayInput(5)}>5</button>
                        <button onClick={() => props.displayInput(6)}>6</button>
                    </div>
                    <div className="numbers">
                        <button onClick={() => props.displayInput(1)}>1</button>
                        <button onClick={() => props.displayInput(2)}>2</button>
                        <button onClick={() => props.displayInput(3)}>3</button>

                    </div>
                    <div className="numbers">
                        <button onClick={() => props.displayInput(0)}>0</button>
                        <button onClick={() => props.displayDot()}>.</button>
                        <button classID="clear" onClick={() => props.displayClear()}>C</button>
                    </div>
                </div>
                <button className="equal" classID="result" onClick={() => props.operated('=')}>=</button>
            </div>
        );
}

renderKeyboard.propTypes = {
    toggleValue: PropTypes.func.isRequired,
    operated: PropTypes.func.isRequired,
    displayInput: PropTypes.func.isRequired,
    displayDot: PropTypes.func.isRequired,
    displayClear: PropTypes.func.isRequired
};