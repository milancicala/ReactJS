import React, { Component } from 'react';
import Display from './components/Display';
import Keyboard from './components/Keyboard';
import './App.css';

class App extends Component {
   constructor() {
       super();
       this.state = {
           displayNumber: '0',
           result: null,
           operator: null,
           showResult: 0,
       }
   }

    displayInput(number) {
     if (this.state.operator === '=' && this.state.showResult === 1) {
       this.setState({ showResult: 0 });
       this.setState({ result: null });
     }
     const {displayNumber} = this.state;
     this.setState({displayNumber: displayNumber === '0' ? String(number) : displayNumber + number});
   }

   toggleValue() {
     if (this.state.showResult === 1) {
         const { result } = this.state;
         this.setState({ result: parseFloat(result) * (-1) });
     } else {
         const {displayNumber} = this.state;
         this.setState({displayNumber: parseFloat(displayNumber) * (-1)});
     }
   }

    displayClear() {
        this.setState({
            showResult: 0,
            displayNumber : '0',
            result: null,
            operator: null
        });
   }

   displayDot() {
     const { displayNumber } = this.state;
     this.setState({ displayNumber : displayNumber.includes('.') ? displayNumber : displayNumber + '.' });
   }

   operated(operator) {
       let operand1 = parseFloat(this.state.result);
       let operand2 = parseFloat(this.state.displayNumber);
       this.setState({ showResult: operator === '=' ? 1 : 0 });

       if(this.state.result === null) {
           this.setState({ result: this.state.displayNumber });
       }
       else if(this.state.operator !== null) {
         switch (this.state.operator) {
             case '+':
                 this.setState({
                     result: operand1 + operand2,
                     displayNumber: '0'
                 });
                 break;
             case '-':
                 this.setState({
                     result: operand1 - operand2,
                     displayNumber: '0'
                 });
                 break;
             case '*':
                 this.setState({
                     result: operand1 * operand2,
                     displayNumber: '0'
                 });
                 break;
             case '/':
                 this.setState({
                     result: operand2 === 0 ? 0 : operand1 / operand2,
                     displayNumber: '0'
                 });
                 break;
             case '=':
                 break;
         }
       }
       this.setState({
           operator: operator,
           displayNumber: '0'
       });
   }

  render() {
    return (
      <div className="calculator">
          <Display
              displayNumber={this.state.displayNumber}
              result={this.state.result}
              showResult={this.state.showResult}
          />
          <Keyboard
              toggleValue={ this.toggleValue.bind(this)}
              displayInput={this.displayInput.bind(this)}
              displayDot={this.displayDot.bind(this)}
              displayClear={this.displayClear.bind(this)}
              operated={this.operated.bind(this)}
          />
      </div>
    );
  }
}

export default App;
