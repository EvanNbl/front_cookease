
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
// import Navbar from './components/navbar'

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage" screenOptions={{headerShown: false}}>
        <Stack.Screen name="StartPage" component={StartPage} />
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* <Stack.Screen name="Navbar" component={Navbar} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;