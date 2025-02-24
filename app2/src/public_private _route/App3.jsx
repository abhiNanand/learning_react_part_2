import { Navigate,useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//private route
function PrivateRoute({ element }) {
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? element : <Navigate to="/login" />;
}
//Note <Navigate to="/login" /> redirect  to the login page.
//No, we cannot directly replace <Navigate to="/login" /> with navigate("/login") inside PrivateRoute.
//Why?
// navigate("/login") is an imperative function (used inside event handlers or effects).
// <Navigate to="/login" /> is declarative (used directly in JSX for redirection).


//public route
function PublicRoute({ element }) {
    return element;
}

function Login()
{
    const navigate = useNavigate();

    function handleLogin()
    {
            localStorage.setItem("token","user_authenticated");// Simulate login
            navigate("/dashboard");// Redirect after login
    }

    return(
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );

}


function Dashboard()
{
    const navigate=useNavigate();

    function handleLogout()
    {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return(
        <div>
            <h2>Dashboard (Private)</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}



export default function App3() {

    return (<Router>
        <Routes>
            <Route path="login" element={<PublicRoute element={<Login/>}/>}/>
            <Route path="/dashboard" element={<PublicRoute element={<Dashboard/>}/>}/>
            <Route path='*' element={<PublicRoute element={<Login/>}/>}/>
            
        </Routes>
    </Router>);
}