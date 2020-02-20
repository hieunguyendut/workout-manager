import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';

class Play extends React.Component {
  state = {
    excerciseName: 'Gập Bụng',
    exerciseTime: '30',
    breakingTime: '10',
  };

  componentDidMount() {
    Tts.getInitStatus().then(
      () => {
        Tts.setDefaultRate(0.5);
      },
      err => {
        if (err.code === 'no_engine') {
          Tts.requestInstallEngine();
        }
      },
    );
  }

  // timer = time => {
  //   this.myInterval = setInterval(() => {
  //     if (time > 0) {
  //       Tts.speak(`${time}`);
  //       time -= 1;
  //     }
  //     if (time === 0) {
  //       clearInterval(this.myInterval);
  //     }
  //   }, 1000);
  // };

  startExercise = () => {
    const { exerciseTime, excerciseName, breakingTime } = this.state;

    Tts.speak('Chào mừng bạn đến với bài tập thể dục hôm nay.');
    Tts.speak(
      `Bài 1: ${excerciseName}, thực hiện trong ${exerciseTime} giây, nghỉ trong ${breakingTime} giây.`,
    );
    setTimeout(() => {
      Tts.speak('Bắt đầu');
      this.timer(30);
    }, 2000);
  };

  render() {
    return (
      <View>
        <Text>Hello from Play</Text>
        <TouchableOpacity onPress={this.startExercise}>
          <Text>Bắt đầu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Play;
