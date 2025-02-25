

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

import {createBrowserRouter,RouterProvider,useRouteError} from "react-router-dom";

const router = createBrowserRouter([

    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "*", element: <h1>404 - Page Not Found</h1> },
]);
export default function App5()
{
    return <RouterProvider router={router}/>}

function Home() {
    return <h1>Home Page</h1>;}
  function About() {
    return <h1>About Page</h1>;}

 //==========================================================================