import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './src/ScreenA';
import ScreenB from './src/ScreenB';
import ScreenC from './src/ScreenC';

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='ScreenA'
          component={ScreenA}
          options={{ title: 'ScreenA 입니다' }}
        />
        <Stack.Screen
          name='ScreenB'
          component={ScreenB}
          options={{ title: 'ScreenB 입니다' }}
        />
        <Stack.Screen
          name='ScreenC'
          component={ScreenC}
          options={{ title: 'ScreenC 입니다' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
