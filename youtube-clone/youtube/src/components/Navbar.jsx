import { useState } from "react";
function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="navbar">
        <div>
            <h1>YouTube 🚀</h1>
        </div>
        <div>
            <input 
                type="text" 
                placeholder="Search..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => console.log(searchQuery)}>Search</button>
        </div>

        <div>
            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="profile" width="40px" />
        </div>

    </div>
    );
}
export default Navbar;