import Profile from './components/Profile/Profile';
import userData from './components/Profile/user.json';

function App() {
  return (
    <Profile userData={ userData } />
  );
}

export default App;
