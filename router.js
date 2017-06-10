import { StackNavigator } from "react-navigation" ;

// Components
import App from './components/App';
import Page1 from './components/Page1/Page1';

export default StackNavigator({
  Home: { screen: App },
  Page1: { screen: Page1 }
})