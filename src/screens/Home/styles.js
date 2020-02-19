import { StyleSheet } from 'react-native';
import { Mixins } from '~/styles';

const styles = StyleSheet.create({
  title: {
    fontSize: Mixins.scaleFont(17),
    fontWeight: 'bold',
    marginBottom: 10,
  },

  addMoreTitle: {
    marginVertical: 10,
    fontSize: Mixins.scaleFont(17),
    fontWeight: 'bold',
  },

  label: { width: Mixins.scaleSize(100), fontSize: 15 },

  txtInput: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    height: 30,
    borderRadius: 10,
    paddingLeft: 10,
  },

  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  timeWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  btn_title: { color: 'white', fontSize: 15 },
  button: {
    width: Mixins.scaleSize(100),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#F06A72',
    alignItems: 'center',
    backgroundColor: '#F06A72',
    padding: 10,
    ...Mixins.boxShadow('black'),
  },
});

export default styles;
