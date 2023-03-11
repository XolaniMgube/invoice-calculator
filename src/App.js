import './App.css';
import Header from './components/Header'
import InvoiceItems from './components/InvoiceItems'
import GrandTotals from './components/GrandTotals'

function App() {
  return (
    <div>
      <Header />
      <InvoiceItems />
      <GrandTotals />
    </div>
  );
}

export default App;
