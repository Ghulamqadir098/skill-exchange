import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthContext, AuthProvider } from './Auth/AuthContext.jsx'
import { Route, RouterProvider, createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Home/Home.jsx'
import Signup from './Signup/Signup.jsx'
import Login from './Login/Login.jsx'
import Create_Exchange from './Exchange/Create_Exchange.jsx'
import Profile from './User/Profile.jsx'

const router= createBrowserRouter(createRoutesFromElements(


    <Route path='/' element={<Layout/>}>
    <Route path='' element={<Home />} />
    <Route path='signup' element={<Signup />} />
    <Route path='login' element={<Login />} />
    <Route path='create_exchange' element={<Create_Exchange/>}/>
    <Route path='user_profile' element={<Profile />}  />
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
  <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  )