import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

export const useCalculator = () => {
  const [result, setResult] = useState('0');
  const [lastResult, setLastResult] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setResult('0');
    setLastResult('0');
  };

  const buildNumber = (number: string) => {
    if (result.includes('.') && number === '.') {
      return;
    }

    if (result.startsWith('0') || result.startsWith('-0')) {
      if (number === '.') {
        setResult(result + number);
      } else if (number === '0' && result.includes('.')) {
        setResult(result + number);
      } else if (number !== '0' && !result.includes('.')) {
        setResult(number);
      } else if (number === '0' && !result.includes('.')) {
      } else {
        setResult(result + number);
      }
    } else {
      setResult(result + number);
    }
  };

  const positiveNegative = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  const deleteNumber = () => {
    if (result.length > 2) {
      setResult(result.slice(0, -1));
    } else if (!result.includes('-') && result.length > 1) {
      setResult(result.slice(0, -1));
    } else {
      setResult('0');
    }
  };

  const changeResultToLast = () => {
    if (result.endsWith('.')) {
      setLastResult(result.slice(0, -1));
    } else {
      setLastResult(result);
    }
    setResult('0');
  };

  const btnDivide = () => {
    changeResultToLast();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeResultToLast();
    lastOperation.current = Operators.multiply;
  };

  const btnAdd = () => {
    changeResultToLast();
    lastOperation.current = Operators.add;
  };

  const btnSubtract = () => {
    changeResultToLast();
    lastOperation.current = Operators.subtract;
  };

  const calculate = () => {
    const num1 = Number(result);
    const num2 = Number(lastResult);

    switch (lastOperation.current) {
      case Operators.add:
        setResult(String(num1 + num2));
        break;
      case Operators.subtract:
        setResult(String(num2 - num1));
        break;
      case Operators.multiply:
        setResult(String(num1 * num2));
        break;
      case Operators.divide:
        setResult(String(num2 / num1));
        break;

      default:
        break;
    }

    setLastResult('0');
  };

  return {
    result,
    lastResult,
    clear,
    buildNumber,
    positiveNegative,
    deleteNumber,
    changeResultToLast,
    btnDivide,
    btnMultiply,
    btnAdd,
    btnSubtract,
    calculate,
  };
};
