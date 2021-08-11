import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    result,
    lastResult,
    clear,
    positiveNegative,
    deleteNumber,
    buildNumber,
    btnAdd,
    btnSubtract,
    btnMultiply,
    btnDivide,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.container}>
      {lastResult !== '0' && (
        <Text style={styles.lastResult}>{lastResult}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" onPress={clear} />
        <ButtonCalc text="+/-" color="#9B9B9B" onPress={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" onPress={deleteNumber} />
        <ButtonCalc text="/" color="#FF9427" onPress={btnDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="7" onPress={buildNumber} />
        <ButtonCalc text="8" onPress={buildNumber} />
        <ButtonCalc text="9" onPress={buildNumber} />
        <ButtonCalc text="x" color="#FF9427" onPress={btnMultiply} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="4" onPress={buildNumber} />
        <ButtonCalc text="5" onPress={buildNumber} />
        <ButtonCalc text="6" onPress={buildNumber} />
        <ButtonCalc text="-" color="#FF9427" onPress={btnSubtract} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="1" onPress={buildNumber} />
        <ButtonCalc text="2" onPress={buildNumber} />
        <ButtonCalc text="3" onPress={buildNumber} />
        <ButtonCalc text="+" color="#FF9427" onPress={btnAdd} />
      </View>

      <View style={styles.row}>
        <ButtonCalc text="0" onPress={buildNumber} wide />
        <ButtonCalc text="." onPress={buildNumber} />
        <ButtonCalc text="=" color="#FF9427" onPress={calculate} />
      </View>
    </View>
  );
};
