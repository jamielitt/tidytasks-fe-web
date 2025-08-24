import './App.css';
import AccountProvider from './providers/account/AccountProvider'
// Need to remove tsx extension from here, find out why
// Update - when everything is named as tsx it is no longer needed
// keeping this comment here for future reference
import Header from './components/ui/header'
import TaskProvider from './providers/tasks/TaskProvider';

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <TaskProvider>
          <Header />
        </TaskProvider>
      </AccountProvider>
    </div>
  );
}

export default App;
