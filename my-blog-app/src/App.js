import SideNavigation from "./components/LeftNavigation";

import './App.css';
import MiddleSection from "./components/MiddleSection";

function App() {
  return (
    <div className="app">
      <div className="main-page">
        <div className="left-navigation"><SideNavigation /></div>
        <div className="middle-section"><MiddleSection /></div>
        <div className="right-section"><p>Welcome to the coding world</p></div>
      </div>
    </div>
  );
}

export default App;
