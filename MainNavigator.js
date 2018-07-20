import {
    StackNavigator,
  } from 'react-navigation';
  import HomeScreen from './HomeScreen';
  import hello from './hello';
  
  const MainNavigator = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: hello },
  });
  
  export default MainNavigator;