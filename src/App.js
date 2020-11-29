import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from "./components/Statistics/Statistics";
import userData from './components/Profile/user.json';
import statisticsData from './components/Statistics/statistical-data.json'

function App() {
  return (
      <>
        <Profile userData={ userData } />
        <Statistics statistics={statisticsData} title="Upload stats" />
      </>
  )
}

export default App;
