import React from 'react'
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import MainPage from './src/screens/MainPage';
import DetailsScreen from './src/screens/Details';
import RootStackScreens from './src/navigation';

const App = () => {
  return (
    <>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <RootStackScreens />
      </SafeAreaProvider>
    </>
  )
}

export default App