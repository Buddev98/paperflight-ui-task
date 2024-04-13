import SideNavigation from "./components/LeftNavigation";

import './App.css';
import MiddleSection from "./components/MiddleSection";
import RightSection from "./components/RightSection";

function App() {
  return (
    <div className="app">
      <div className="main-page">
        <div className="left-navigation"><SideNavigation /></div>
        <div className="middle-section"><MiddleSection /></div>
        <div className="right-section">
          <img className="banner-image" src='/banner-image.svg' alt='bannerImage' />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
