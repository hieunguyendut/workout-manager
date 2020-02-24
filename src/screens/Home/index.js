import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { withTranslation } from 'react-i18next';
import { List, ListItem } from 'native-base';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { addTaskAction } from '~/actions/taskAction';
import styles from './styles';

const ListItemHeader = styled(ListItem)`
  margin-left: 0;
  background-color: #f2edd5;
`;

const ListItemStyled = styled(ListItem)`
  margin-left: 0;
`;

const Index = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 5px;
`;

const NameOfExercise = styled(View)`
  flex: 5;
  align-items: center;
  justify-content: center;
`;

const ExerciseTime = styled(View)`
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const BreakTime = styled(View)`
  flex: 2;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

class Home extends React.Component {
  static propTypes = {
    aAddTaskAction: PropTypes.func.isRequired,
    rTask: PropTypes.array.isRequired,
  };

  state = {
    exerciseNameValue: '',
    exerciseTimeValue: '',
    breakTimeValue: '',
    listExercise: [
      {
        id: 0,
        exerciseNameValue: 'Tap nhay xa that la xa hahahahah, balata',
        exerciseTimeValue: '30s',
        breakTimeValue: '10s',
      },
    ],
  };

  onChangeText = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  resetForm = () => {
    this.setState({
      exerciseNameValue: '',
      exerciseTimeValue: '',
      breakTimeValue: '',
    });
  };

  handleAddMore = () => {
    const {
      listExercise,
      exerciseNameValue,
      exerciseTimeValue,
      breakTimeValue,
    } = this.state;

    const idOfNewItem = listExercise.length;
    const newItem = {
      id: idOfNewItem,
      exerciseNameValue,
      exerciseTimeValue,
      breakTimeValue,
    };

    listExercise.push(newItem);
    this.resetForm();
  };

  render() {
    const {
      listExercise,
      exerciseNameValue,
      exerciseTimeValue,
      breakTimeValue,
    } = this.state;

    const { aAddTaskAction, rTask } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ paddingHorizontal: 15 }}>
          <View>
            <Text style={styles.title}>Danh sach cac bai tap</Text>
            <List>
              <ListItemHeader>
                <Index>
                  <Text>Index</Text>
                </Index>
                <NameOfExercise>
                  <Text>Name of Exercise</Text>
                </NameOfExercise>
                <ExerciseTime>
                  <Text>Exercise Time</Text>
                </ExerciseTime>
                <BreakTime>
                  <Text>Rest Time</Text>
                </BreakTime>
              </ListItemHeader>
              {listExercise.map((exerciseObj, i) => (
                <ListItemStyled key={exerciseObj.id}>
                  <Index>
                    <Text>{i}</Text>
                  </Index>
                  <NameOfExercise>
                    <Text>{exerciseObj.exerciseNameValue}</Text>
                  </NameOfExercise>
                  <ExerciseTime>
                    <Text>{exerciseObj.exerciseTimeValue}</Text>
                  </ExerciseTime>
                  <BreakTime>
                    <Text>{exerciseObj.breakTimeValue}</Text>
                  </BreakTime>
                </ListItemStyled>
              ))}
            </List>
          </View>
          <Text style={styles.addMoreTitle}>Thêm mới bài tập</Text>
          <View>
            <View style={[styles.timeWrapper, { flex: 0 }]}>
              <Text style={styles.label}>Tên bài tập</Text>
              <TextInput
                style={styles.txtInput}
                onChangeText={text => this.onChangeText('exerciseNameValue', text)}
                value={exerciseNameValue}
              />
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.timeWrapper}>
                <Text style={styles.label}>Thời gian tập</Text>
                <TextInput
                  style={styles.txtInput}
                  keyboardType="numeric"
                  onChangeText={text => this.onChangeText('exerciseTimeValue', text)}
                  value={exerciseTimeValue}
                />
              </View>
              <View style={styles.timeWrapper}>
                <Text style={[styles.label, { marginHorizontal: 10 }]}>
                  Thời gian nghỉ
                </Text>
                <TextInput
                  style={styles.txtInput}
                  keyboardType="numeric"
                  onChangeText={text => this.onChangeText('breakTimeValue', text)}
                  value={breakTimeValue}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={this.handleAddMore}
                style={styles.button}
              >
                <Text style={styles.btn_title}>Thêm</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => aAddTaskAction({ id: '1', name: 'something' })}
            >
              <Text>Increase By 1</Text>
            </TouchableOpacity>
            <Text>{`counter: ${rTask}`}</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default compose(
  connect(
    state => ({
      rTask: state.taskReducer.task,
    }),
    dispatch => bindActionCreators(
      {
        aAddTaskAction: addTaskAction,
      },
      dispatch,
    ),
  ),
  withTranslation(['common']),
)(Home);
