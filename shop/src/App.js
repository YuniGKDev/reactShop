import './App.css';
import AppRouter from './routes/AppRouter';
import AppLayout from './layout/AppLayout';

function App() {
  return (
    <div>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </div>
  );
}

export default App;
