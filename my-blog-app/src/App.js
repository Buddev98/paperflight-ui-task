import LeftNavigation from "./components/LeftNavigation";
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";
import data from "./LeftNavigationData.json";

import './App.css';

function App() {
  return (
    <div className="app">
      <div className="main-page">
        <div className="left-navigation"><LeftNavigation data={data} /></div>
        <div className="middle-section"><MiddleSection data={data} /></div>
        <div className="right-section">
          <RightSection data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
