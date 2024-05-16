import 'react-native-gesture-handler';
import 'react-native-reanimated'

import { Provider } from "react-redux";
import { store } from './src/redux/store';
import AppNav from "./src/navigation/AppNav";
import BottomTab from './src/screens/BottomTab';

export default function App() {
    return (
        <Provider store={store}>
            <AppNav/>
            {/* <BottomTab></BottomTab> */}
        </Provider>
    );
}