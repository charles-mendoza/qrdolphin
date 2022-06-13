import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import App from './App';

const Main = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
}

registerRootComponent(Main);
