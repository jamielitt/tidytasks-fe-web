import './App.css';

// Need to remove tsx extension from here, find out why
// Update - when everything is named as tsx it is no longer needed
// keeping this comment here for future reference
import Header from './components/ui/header'

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
