import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/layout/Layout';
import "./App.css"
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Service from './pages/service/Service';
import NotFound from './pages/notfound/NotFound';
import ContactForm from './pages/contactUsForm/ContactForm';
import ContactEmails from './pages/contactUsEmails/ContactEmails';

export default function App() {
  const Routing = createBrowserRouter([{
    path: "" , element: <Layout/> ,
    children : [
      {
      path: "" , element: <Home/>
    },
      {
      path: "About" , element: <About/>
    },
      {
      path: "Service" , element: <Service/>
    },
      {
      path: "ContactUs" , element: <Contact/>,
      children: [
        {index:true , element: <ContactForm/> },
        {path:"emails" , element: <ContactEmails/> }
      ]
    },
      {
      path: "*" , element: <NotFound/>,
    }
  ]

  }])
  return (
    < RouterProvider router={Routing} />
  )
  
}

