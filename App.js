import 'react-native-gesture-handler';
import 'react-native-reanimated'
import { StyleSheet, View, Text} from 'react-native';
import SV_Nav from './src/screen/SV_Nav';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import LoadingIndicator from './src/components/LoadingIndicator';

export default function App() {
  return (
    <Provider store={store}>
      <SV_Nav></SV_Nav>
      {/* <LoadingIndicator size={100}/> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
