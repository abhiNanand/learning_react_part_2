// useLocation Hook
// import React, {useEffect} from 'react';
// import {useLocation,BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

// function PageTracker()
// {
//     const location = useLocation();

//     useEffect(()=>{
//         console.log("Page changed to:",location.pathname);
//         document.title=`${location.pathname}`;
//     },[location]);//runs when location changes.
//     return null;
// }

// function Home()
// {
//     return <h2>Home</h2>;
// }

// function About()
// {
//     return <h2> About</h2>;
// }


// export default function App4()
// {
//     return(
//         <Router>
//             <PageTracker/>
//             <nav>
//                 <li><Link to="/">Home</Link>|<Link to="/about">About</Link> </li>
//             </nav>
//             <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             </Routes>
//         </Router>
//     )
// }

 

 // useMatch Hook

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useMatch } from "react-router-dom";

// function AboutPage() {
//   return <h2>ℹ️ This is the About Page</h2>;
// }

// function HomePage() {
//   return <h2>🏠 Welcome to Home</h2>;
// }

// function CheckMatch() {
//   const match = useMatch("/about"); // Checks if the current path is "/about"

//   return (
//     <p>{match ? "✅ You are on the About Page!" : "❌ You are NOT on the About Page."}</p>
//   );
// }

// function App3() {
//   return (
//     <Router>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>
//       <CheckMatch />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App3;


//use Pramas 1.
import React from "react";
import { BrowserRouter as Router, Routes, Route, useParams, Link } from "react-router-dom";

function ProfilePage()
{
    let {userId} = useParams();
    console.log(useParams());
   
    return (
        <div>
            <h2>User Profile</h2>
            <p>User Id:{userId}</p>
            <Link to="/">Go Back</Link>
        </div>
    );
}

function Home()
{
    return(
        <div>
            <h1>Home Page</h1>
            <p>Click a user to view their profile</p>
            <ul>
        <li><Link to="/users/101">User 101</Link></li>
        <li><Link to="/users/202">User 202</Link></li>
        <li><Link to="/users/303">User 303</Link></li>
            </ul>
        </div>
    )
}

export default function App4()
{
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="users/:userId" element={<ProfilePage />} />
          </Routes>
        </Router>
      );
}