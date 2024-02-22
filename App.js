/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

function App() {
  const [data, setData] = useState('');

  const [history, setHistory] = useState([])

  const handleResult = () => {
    let result = eval(data);
    setHistory(prevData => [... prevData, `${data}=${result}`]);
    setData(result)
  };

  const handleText = text => {
    switch (text) {
      case 'C':
        setData('');
        setHistory([])
        break;
      case 'Delete':
        if (typeof data === 'string' && data.length > 0) {
          let newData = data.slice(0, -1);
          setData(newData);
        }
        break;
      case '=':
        handleResult();
        break;
      default:
        setData(prevData => `${prevData}${text}`);
        break;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.screen}>
        <View style={styles.screenHistoryContainer}>
        {history.map(item =>{
          return <Text style={styles.screenHistory}>{item}</Text>
        })}
        </View>
        <Text style={styles.screenText}>{data}</Text>
      </View>
      <View style={styles.keyboardContainer}>
        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('C')}>
          <Text style={styles.keyboardText}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('Delete')}>
          <Text style={styles.keyboardText}>xóa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('%')}>
          <Text style={styles.keyboardText}>%</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('/')}>
          <Text style={styles.keyboardText}>/</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('7')}>
          <Text style={styles.keyboardText}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('8')}>
          <Text style={styles.keyboardText}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('9')}>
          <Text style={styles.keyboardText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('*')}>
          <Text style={styles.keyboardText}>*</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('4')}>
          <Text style={styles.keyboardText}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('5')}>
          <Text style={styles.keyboardText}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('6')}>
          <Text style={styles.keyboardText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('-')}>
          <Text style={styles.keyboardText}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('1')}>
          <Text style={styles.keyboardText}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('2')}>
          <Text style={styles.keyboardText}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('3')}>
          <Text style={styles.keyboardText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('+')}>
          <Text style={styles.keyboardText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('0')}>
          <Text style={styles.keyboardText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('.')}>
          <Text style={styles.keyboardText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.pressedKeyboard, styles.keyboard]}
          onPress={() => handleText('=')}>
          <Text style={styles.keyboardText}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    width: '100%',
    height: '35%',
    backgroundColor: '#fff',
  },
  screenHistoryContainer:{
    zIndex:2,
    position:"absolute",
  },
  screenHistory:{
    color:"red",
    fontSize:19
  },
  screenText: {
    color: '#000',
    fontSize: 30,
    fontWeight: '600',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  keyboardContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  pressedKeyboard: {},
  keyboard: {
    backgroundColor: '#ff2',
    borderRadius: 10,
    width: 90,
    height: 90,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardText: {
    fontSize: 30,
    color: 'red',
  },
});

export default App;
