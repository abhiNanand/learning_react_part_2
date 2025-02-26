

//.in BrowserRouter 
//The * (asterisk) is called a wildcard route in React Router.
// import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";

// export default function App5()
// {
//     return(
        
//     <Router>
//         <ul>
//             <Link to='/'>Home</Link> |  <Link to='/about'>About</Link> 
//         </ul>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//             <Route path='*' element={<Error/>}/>
//         </Routes>
//     </Router>
//     );
// }
// const Home=()=><h1>This is Home Page</h1>
// const About=()=><h1>This is About Page</h1>
// const Error=()=>
// {
//     return(
// <h1>Error 404 not found</h1>
//     );
// }


//===========================================================================
//Handling Errors with errorElement (for createBrowserRouter)

// import {createBrowserRouter,RouterProvider,useRouteError} from "react-router-dom";

// const router = createBrowserRouter([

//     { path: "/", element: <Home /> },
//     { path: "/about", element: <About /> },
//     { path: "*", element: <h1>404 - Page Not Found</h1> },
// ]);
// export default function App5()
// {
//     return <RouterProvider router={router}/>}

// function Home() {
//     return <h1>Home Page</h1>;}
//   function About() {
//     return <h1>About Page</h1>;}

 //==========================================================================

// import React, { Fragment } from "react";
 
// import { BrowserRouter as Router,Routes,Link, Route } from "react-router-dom";

// export default function App5() {
   
//   return (
    
//   <Router>
  
//     <main>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="contact">Contact</Link></li>
//         </ul>
//       </nav>
// {/* Routes Wrapper */}
//    <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="contact" element={<Contact />} />
//        </Routes>
//      </main>


    
// </Router>
//   );
// }

 


// const Home = () => {
//     return (
//       <div className="container">
//         <header className="welcome-header">
//           <h3>Welcome to My Page!</h3>
//           <p>I'm glad you're here. Explore to know more about me.</p>
//         </header>
//       </div>
//     );
//   };

//   const About = () => {
//     return (
//       <section className="about-section">
//         <h2>About Me</h2>
//         <p>Hi, I'm Abhishek Anand from Vaishali, Bihar. I'm a passionate React Developer.</p>
//       </section>
//     );
//   };

//   const Contact = () => {
//     return (
//       <section className="contact-section">
//         <h2>Contact Me</h2>
//         <p>Email: abhishekanand@example.com</p>
//         <p>LinkedIn: linkedin.com/in/abhishekanand</p>
//       </section>
//     );
//   };

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";  // ✅ Import Outlet

function App5() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />  {/* Default child route */}
          <Route path="profile" element={<Profile />} /> {/* Explicit subpath */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <Outlet /> {/* Renders child routes here */}
    </div>
  );
}

function DashboardHome() {
  return <h3>Welcome to Dashboard</h3>;
}

function Profile() {
  return <h3>User Profile</h3>;
}

export default App5;
