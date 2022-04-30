import './App.css';
import Header from './components/Header';
import {
  AiOutlineHdd,
  AiOutlineExperiment,
  AiOutlineAlert,
  AiOutlineEyeInvisible,
  AiOutlineApi,
} from 'react-icons/ai';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div></div>
        <h6>
          <AiOutlineExperiment />
          This url (<code>https://example.com/safe</code>) is <b>Safe</b>
        </h6>
        <div>
          <h3>
            DNS <AiOutlineHdd />
          </h3>
        </div>
        <div>
          <h3>
            SSL
            <AiOutlineApi />
          </h3>
        </div>
        <div>
          <h3>
            Not Listed
            <AiOutlineAlert />
          </h3>
        </div>
        <div>
          <h3>
            No trackers <AiOutlineEyeInvisible />
          </h3>
        </div>

        <div></div>

        <a
          className="App-link"
          href="https://github.com/configtheworld/security-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
