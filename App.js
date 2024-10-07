import React, { useState, useEffect } from 'react'; 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home'; 
import Gallery from './Gallery'; 
import VideoUpload from './VideoUpload'; 
import VideoList from './VideoList'; 
import SignIn from './SignIn'; 
import SignUp from './SignUp'; 
import { auth } from './firebase'; 
import './App.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import About from './About';
import Contests from './Contests';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);  
      } else {
        setUser(null);  
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar">
          <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'space-around' }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/blogs">Explore</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
           
            {user ? (
              <>
                <li>
                  <Link to="/upload">Upload Video</Link>
                </li>
                <li>
                  <button onClick={() => auth.signOut()}>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signin">Educator Login</Link>
                </li>
                <li>
                  <Link to="/signup">Educator Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blogs" element={<VideoList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contest" element={<Contests />} />
          <Route path="/upload" element={user ? <VideoUpload /> : <SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
