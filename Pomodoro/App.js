import React from 'react';
import button from 'react-native';
import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';




const WORK_MINS = 25
const BREAK_MINS = 5

// const minToSec = mins => mins * 60
// const nextTimer = {work: 'break', break: 'work'}

export default class App extends React.Component {
  state ={
    workTime: workTime*60,
    breakTime: breakTime*60,


  }


  render() {
    return (
      <View style={styles.container}>
        
        <text style={styles.title}>working</text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#fff',
    alignItems: 'stretch',
  },
  center: {
    alignSelf: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
    textTransform: 'capitalize',
  },
  });
 
