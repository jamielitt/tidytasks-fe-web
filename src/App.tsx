import './main.css';
import AccountProvider from './providers/account/AccountProvider'
import Header from './components/ui/header'
import TaskProvider from './providers/tasks/TaskProvider';
import UISurface from './components/ui/uiSurface';

function App() {
  return (
    <div className="App">
      <AccountProvider>
        <TaskProvider>
          <Header />
          <UISurface />
        </TaskProvider>
      </AccountProvider>
    </div>
  );
}

export default App;
