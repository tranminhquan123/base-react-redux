import logo from "./logo.svg";
import Header from "./components/Header/Header.js";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className='App-contaier'>
      <Header />
      <div>
        test link
        <div>
          <button>
            <Link to='/users'>go to User Page</Link>
          </button>
          <button>
            <Link to='/admin '>go to admin Page</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
