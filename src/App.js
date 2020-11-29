import React from 'react';
import userData from './components/Profile/user.json';
import statisticsData from './components/Statistics/statistical-data.json';
import friendsData from './components/FriendList/friends.json';
import transactionsData from './components/TransactionHistory/transactions.json';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';


function App() {
  return (
      <>
        <Profile userData={userData} />
        <Statistics statistics={statisticsData} title="Upload stats" />
        <FriendList friends={friendsData} />
        <TransactionHistory transactions={transactionsData} />
      </>
  )
}

export default App;
