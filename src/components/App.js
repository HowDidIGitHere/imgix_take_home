import '../styles/App.css';
import ImageManipulationForm from './forms/ImageManipulationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://assets.imgix.net/unsplash/bridge.jpg" id="bridge" alt="golden-gate-bridge"></img>
        <ImageManipulationForm />
      </header>
    </div>
  );
}

export default App;
