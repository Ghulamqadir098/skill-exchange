import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Signup from './Signup/Signup.jsx'


const router= createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    </Route>
    
    ));



// function Example() {
//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-8">
//                     <div className="card">
//                         <div className="card-header">Example Component</div>

//                         <div className="card-body">I'm an example component!</div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Example;

ReactDOM.createRoot(document.getElementById('example')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )