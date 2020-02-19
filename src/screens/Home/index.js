import React from 'react';
import { Text, SafeAreaView, View, TextInput } from 'react-native';
import { withTranslation } from 'react-i18next';

class Home extends React.Component {
  state = {
    value: '',
  };

  onChangeText = value => {
    this.setState({
      value,
    });
  };

  render() {
    const { value } = this.state;

    return (
      <SafeAreaView style={{ paddingHorizontal: 15, flex: 1 }}>
        <Text>Danh sach cac bai tap</Text>
        <Text>Them moi</Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ flex: 1 }}>Ten bai tap</Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              onChangeText={this.onChangeText}
              value={value}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ flex: 1 }}>Thoi gian tap</Text>
            <TextInput
              style={{
                flex: 2,
                borderColor: 'gray',
                borderWidth: 1,
                width: 50
              }}
              onChangeText={this.onChangeText}
              value={value}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Text style={{ flex: 1 }}>Thoi giai nghi</Text>
            <TextInput
              style={{
                flex: 3,
                borderColor: 'gray',
                borderWidth: 1,
              }}
              onChangeText={this.onChangeText}
              value={value}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default withTranslation(['common'])(Home);
