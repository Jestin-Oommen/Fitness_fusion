import React from 'react'
//import Navbar from '../components/Navbar.jsx'
import About from '../components/About.js'
import Header from '../components/Header.js'
import Features from '../components/Features.js'
import Blog from '../components/Blog.js'
const Home = () => {
  return (
    <div>
      {/* <Navbar/>  */}
      <Header/>
      <About/>
      <Features/> 
      <Blog/>
    </div>
  )
}

export default Home
