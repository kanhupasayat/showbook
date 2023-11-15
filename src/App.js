
import './App.css';
import Footer from './componets/Footer';
import Onepasge from './componets/Onepasge';
import Search from './componets/Search';
import Twopage from './componets/Twopage';

function App() {
  return (
    <div className="App">
      <Onepasge/>
      <Twopage/>
      <Search />
      <Footer />
    </div>
  );
}

export default App;
