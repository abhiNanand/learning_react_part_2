import React, { Fragment } from "react";
import "./index.css"
import { BrowserRouter as Router,Routes,Link, Route } from "react-router-dom";

// export default function App() {
   
//   return (
    
//   <Router>
  
//     <main>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
// {/* Routes Wrapper */}
//    <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/about" element={<About />} />
//          <Route path="/contact" element={<Contact />} />
//        </Routes>
//      </main>


    
// </Router>
//   );
// }

// Home Page
// const Home = () => (
//     <Fragment>
//       <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
//         Google
//       </a>
//       <Welcome />
//     </Fragment>
//   );
  

// // About Page
// const About = () => (
//   <Fragment>
//     <AboutMe />
//   </Fragment>
// );

// // Contact Page
// const Contact = () => (
//   <Fragment>
    
//     <ContactDetails/>
//   </Fragment>
// );

 

// const Welcome = () => {
//     return (
//       <div className="container">
//         <header className="welcome-header">
//           <h3>Welcome to My Page!</h3>
//           <p>I'm glad you're here. Explore to know more about me.</p>
//         </header>
//       </div>
//     );
//   };

//   const AboutMe = () => {
//     return (
//       <section className="about-section">
//         <h2>About Me</h2>
//         <p>Hi, I'm Abhishek Anand from Vaishali, Bihar. I'm a passionate React Developer.</p>
//       </section>
//     );
//   };

//   const ContactDetails = () => {
//     return (
//       <section className="contact-section">
//         <h2>Contact Me</h2>
//         <p>Email: abhishekanand@example.com</p>
//         <p>LinkedIn: linkedin.com/in/abhishekanand</p>
//       </section>
//     );
//   };
  


// 2.   Nested Routes


 import {Outlet} from "react-router-dom" ;

// export default function App() {
//   return (
//     <Router>
//       <main>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Routes Wrapper with Nested Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />}>
//             <Route path="details" element={<AboutDetails />} /> 
//           </Route>
//           <Route path="/contact" element={<Contact />}>
//             <Route path="info" element={<ContactInfo />} />
//           </Route>
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// // Home Page
// const Home = () => (
//   <Fragment>
//     <Welcome />
//   </Fragment>
// );

// // About Page (Parent Route)
// const About = () => (
//   <Fragment>
//     <h2>About</h2>
//     <Link to="details">More Details</Link> 
//     <Outlet />  {/* This is where the nested route will render */}
//   </Fragment>
// );

// // Contact Page (Parent Route)
// const Contact = () => (
//   <Fragment>
//     <h2>Contact</h2>
//     <Link to="info">More Contact Info</Link> 
//     <Outlet />  {/* This is where the nested route will render */}
//   </Fragment>
// );

// // Nested Component for About
// const AboutDetails = () => (
//   <section className="about-section">
//     <h2>About Me</h2>
//     <p>Hi, I'm Abhishek Anand from Vaishali, Bihar. I'm a passionate React Developer.</p>
//   </section>
// );

// // Nested Component for Contact
// const ContactInfo = () => (
//   <section className="contact-section">
//     <h2>Contact Me</h2>
//     <p>Email: abhishekanand@example.com</p>
//     <p>LinkedIn: linkedin.com/in/abhishekanand</p>
//   </section>
// );

// const Welcome = () => (
//   <div className="container">
//     <header className="welcome-header">
//       <h3>Welcome to My Page!</h3>
//       <p>I'm glad you're here. Explore to know more about me.</p>
//     </header>
//   </div>
// );

//3 Layout Routes.

 
 
// export default function App() {
//   return (
//     <Router>
      
//       <Routes>
//         {/* Layout Route */}
//         <Route path="/" element={<MainLayout />}>
//           <Route index element={<Home/>}/>
//           <Route path="/about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//         <Route path="/login" element={<Login />} /> {/* No Layout */}
//       </Routes>
//     </Router>
//   );
// }

// // ✅ Layout Component
// const MainLayout = () => {
//   return (
//     <div>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
//       </nav>
//       <hr />
//       <Outlet /> {/* Renders Home, About, or Contact */}
//       <footer>© 2025 My Website</footer>
//     </div>
//   );
// };

// // ✅ Page Components
// const Home = () => <h2>Home Page</h2>;
// const About = () => <h2>About Us</h2>;
// const Contact = () => <h2>Contact Us</h2>;
// const Login = () => <h2>Login Page (No Layout)</h2>;


//route prefix

// ✅ Page Components
 //===========================================================================



 //Dynamic Segment
  import {useParams} from 'react-router-dom'
//  export default function App() {
//   return (<Router>
//     <main>
//       <nav>
//         <ul>
//           <li><Link to='/'>Home</Link></li> 
//           <li><Link to='about'>About</Link></li>
//           <li><Link to='contact'>Contact</Link></li>
//           <li> <Link to="/user/abhishek">Abhishek's Profile</Link></li>
//           <li ><Link to="/user/john">John's Profile</Link></li>
//         </ul>
//       </nav>

// {/*Routes Wrapper */}
// <Routes>
//   <Route path='/' element={<Home/>}/>
//   <Route path='/about' element={<About/>}/>
//   <Route path="/contact" element={<Contact />} />
//   <Route path="/user/:username" element={<UserProfile/>}/>
// </Routes>


//     </main>
//   </Router>);}
 
//  const Home = () => <h2>Home Page</h2>;
//  const About = () => <h2>About Us</h2>;
//  const Contact = () => <h2>Contact Us</h2>;
 
//  const UserProfile = () => {
//   let { username } = useParams(); // Get dynamic segment from URL
//   return (
//     <section className="profile-section">
//       <h2>Welcome, {username}!</h2>
//       <p>This is the profile page of {username}.</p>
//     </section>
//   );
// };


//optional chaining.
// export default function App() {
//   return (
//     <Router>
//       <main>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>

//         {/* Routes */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/about/:id" element={<AboutDetails />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/contact/:id" element={<ContactInfo />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// // Home Component
// const Home = () => <h2>Home Page</h2>;

// // About Component
// const About = () => <h2>About Us</h2>;

// // AboutDetails Component (Fixed)
// const AboutDetails = () => {
//   const { id } = useParams();
//   return <h2>About Details: {id ? id.toUpperCase() : "No ID Provided"}</h2>;
// };

// // Contact Component
// const Contact = () => <h2>Contact Us</h2>;

// // ContactInfo Component (Fixed)
// const ContactInfo = () => {
//   const { id } = useParams();
//   return <h2>Contact Info: {id ? id.toUpperCase() : "No ID Provided"}</h2>;
// };

//splats
// export default function App() {
//   return (
//     <Router>
//       <main>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/files/documents/report.pdf">View File</Link></li>
//             <li><Link to="/files/picture/img1.jpg">View Picture</Link></li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="files/*" element={<FileViewer />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// // Home Component
// const Home = () => <h2>Home Page</h2>;

// // FileViewer Component (Using Splats)
// const FileViewer = () => {
//   let { "*": filePath } = useParams();
//   return <h2>Viewing File: {filePath || "No file selected"}</h2>;
// };

export default function App()
{
  return <h1>hi</h1>;
}
