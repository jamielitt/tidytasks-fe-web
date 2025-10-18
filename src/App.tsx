import './main.css';
import AccountProvider from './providers/account/AccountProvider'
import Header from './components/ui/header'
import TaskProvider from './providers/tasks/TaskProvider';
import TaskContainer from './components/taskContainer';

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <TaskProvider>
          <Header />
          <TaskContainer />
        </TaskProvider>
      </AccountProvider>
    </div>
  );
}

export default App;
