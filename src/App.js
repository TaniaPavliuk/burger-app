import Header from './components/Header';
import Blog from './components/Blog';
import Banner from './components/Banner';
import News from './components/News';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <div className="main-container">
        <Blog />
        <News />
      </div>
    </div>
  );
}

export default App;
