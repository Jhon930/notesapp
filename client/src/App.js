import './App.css';
import Navbars from './Components/Navbar';
import Tasklist from './Components/Tasklist';
import { CustomContextProvider } from './Context/MyContext';
import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  return (
    <div>
      <CustomContextProvider>
        <Router>
          <Navbars/>
          <Tasklist/>
        </Router>
      </CustomContextProvider>
    </div>
  );
}

export default App;
