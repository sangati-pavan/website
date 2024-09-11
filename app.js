import React, {useState} from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('about')

  const handleTabClick = tab => {
    setActiveTab(tab)
  }

  return (
    <div className="app-container">
      <div className="empty-left"></div>

      <div className="right-widgets">
        {/* First Widget: About/Experiences/Recommended */}
        <div className="info-widget">
          <div className="tabs">
            <button
              className={activeTab === 'about' ? 'active' : ''}
              onClick={() => handleTabClick('about')}
            >
              About Me
            </button>
            <button
              className={activeTab === 'experiences' ? 'active' : ''}
              onClick={() => handleTabClick('experiences')}
            >
              Experiences
            </button>
            <button
              className={activeTab === 'recommended' ? 'active' : ''}
              onClick={() => handleTabClick('recommended')}
            >
              Recommended
            </button>
          </div>
          <div className="content">
            {activeTab === 'about' && (
              <p>Hello! I'm Dave, your sales rep here from Salesforce...</p>
            )}
            {activeTab === 'experiences' && <p>Experience Content Here...</p>}
            {activeTab === 'recommended' && <p>Recommended Content Here...</p>}
          </div>
        </div>

        {/* Second Widget: Gallery */}
        <div className="gallery-widget">
          <div className="gallery-header">
            <button className="btn">Gallery</button>
            <div className="gallery-navigation">
              <button className="add-image">+ ADD IMAGE</button>
              <div>
                <button className="prev">&#8592;</button>
                <button className="next">&#8594;</button>
              </div>
            </div>
          </div>
          <div className="gallery-content">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMiYUhm4e6kUhwd3h_ZhWwZduyU6BH7mG8csiM6eo1Dr2ksMXa"
              alt="Gallery Item"
            />
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMiYUhm4e6kUhwd3h_ZhWwZduyU6BH7mG8csiM6eo1Dr2ksMXa"
              alt="Gallery Item"
            />
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMiYUhm4e6kUhwd3h_ZhWwZduyU6BH7mG8csiM6eo1Dr2ksMXa"
              alt="Gallery Item"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
