import { createStackNavigator } from 'react-navigation';
import Calculator from './Calculator';
import History from './History';


const AppNavigator = createStackNavigator({
  Calculator:{screen: Calculator},
    History:{screen: History},
},
{  navigationOptions: {
  header: null 
}} 
);


export default AppNavigator;