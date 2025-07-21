import AppRouter from './AppRouter';
import './styles/App.css';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <AppRouter/>
      </DataProvider>
    </div>
  );
}

export default App;
