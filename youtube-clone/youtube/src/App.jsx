import Navbar from "./components/Navbar"
import VideoCard from "./components/VideoCard";
import SideBar from "./components/SideBar";
import "./App.css"
function App() {
  const videos = [
    {
      title: "React Tutorial",
      channel: "Chai Aur Code",
      views: "100K"
    },
    {
      title: "React Tutorial",
      channel: "code with Harry",
      views: "100K"
    },
    {
      title: "React Tutorial",
      channel: "Kunal Kushwaha",
      views: "100K"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="main-layout">
        <SideBar  className="sidebar"/>
        
        <div className="video-container">
            {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              channel={video.channel}
              views={video.views}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
