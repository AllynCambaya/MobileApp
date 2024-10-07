import React from 'react';
import { SafeAreaView } from 'react-native';
import Profile from './pages/Profile'; // Importing Profile from the pages folder

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Profile /> 
    </SafeAreaView>
  );
};

export default App;
