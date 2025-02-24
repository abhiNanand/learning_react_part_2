import './App2.css';
import {BrowserRouter as Router, NavLink,Route,Routes } from "react-router-dom";

// by default it is in active state.
// export default function App2()
// {
//     return(
//         <Router>
//             <ul>
//                 <li>
//                     <NavLink to="/">Home</NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="service">Services
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="about">About</NavLink>
//                 </li>
//             </ul>
//         </Router>
//     );
// }

// using className as a function (Dynamic Styling)
// export default function App2()
// {
//     return(
//         <Router>
//                          <ul>
//                          <li>
//                              <NavLink to="/"
//                              className={({isActive})=>(isActive ? "active-link":"inactive-link") }
//                              >Home</NavLink>
//                          </li>
//                          <li>
//                              <NavLink to="/service"
//                              className={({isActive})=>(isActive ? "active-link":"inactive-link")}
//                              >Services
//                              </NavLink>
//                          </li>
//                          <li>
//                              <NavLink to="/about"
//                              className={({isActive})=>(isActive ? "active-link":"inactive-link")}
//                              >About</NavLink>
//                          </li>
//                      </ul>
//         </Router>
      
//     );
// }

//useNavigate hook

import {useNavigate} from 'react-router-dom';

function LoginPage() {
    let navigate = useNavigate();

    function handleLogin() {
        // Simulating login process
        console.log("User logged in!");
        navigate("/dashboard"); // Redirect to the dashboard after login
    }

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

function Dashboard() {
    return <h2>Welcome to the dashboard</h2>;
}

export default function App2() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}