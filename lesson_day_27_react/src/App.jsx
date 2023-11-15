
import './App.css'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';


function App() {

  return (
    <div>
      <Header />
      <Navbar />
      <div className='container'>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}

export default App
