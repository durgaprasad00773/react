import { useState } from "react";

function SideBar() {
    const [active, setActive] = useState("home");
    return(
        <div className="sidebar">
            <div className={`sidebar-item ${active === "home" ? "active" : ""}`} onClick={() => setActive("home")}>
                <span role="img" aria-label="home">🏠</span> Home
            </div>
            <div className={`sidebar-item ${active === "explore" ? "active" : ""}`} onClick={() => setActive("explore")}>
                <span role="img" aria-label="explore">🔍</span> Explore
            </div>
            <div className={`sidebar-item ${active === "subscriptions" ? "active" : ""}`} onClick={() => setActive("subscriptions")}>
                <span role="img" aria-label="subscriptions">📺</span> Subscriptions
            </div>
            <div className={`sidebar-item ${active === "library" ? "active" : ""}`} onClick={() => setActive("library")}>
                <span role="img" aria-label="library">📚</span> Library
            </div>
        </div>
    )
}

export default SideBar;