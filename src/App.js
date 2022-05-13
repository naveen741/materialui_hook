import './App.css';
import Header from './component_1/Header';
import SideBar from './component_1/SideBar';
import Content from './component_1/Content';
import Footer from './component_1/Footer'
function App() {
  return (
    <div className="App">
      <Header/>
      <div className='subContainer'>
          <SideBar/>
          <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
