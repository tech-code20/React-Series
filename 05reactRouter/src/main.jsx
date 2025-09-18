import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import Layout from './components/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx"
import Contact from "./components/Contact/Contact.jsx"
import User from './components/User/User.jsx';
import Github, { githubInfoLoader } from './components/Github/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>} />
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route
      loader={githubInfoLoader}
      path='github'
      element={<Github/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)

// Note: What is Loader Function?
// A loader function is used to fetch data before rendering a route in React Router. 
// It allows you to load data asynchronously and pass it to the component associated with the route.
// This ensures that the component has the necessary data when it is rendered, improving user experience by avoiding loading states within the component itself.
