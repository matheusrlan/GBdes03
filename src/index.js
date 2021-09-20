import ReactDOM from 'react-dom'
import React from 'react'
import Profile from './components/middle/profile'
import Banner from './components/middle/banner'
import Contact from './components/middle/contact'
import Tab from './components/middle/tab'


ReactDOM.render(
  <div>
     <Banner></Banner>
     <Profile></Profile>
     <Contact></Contact>
     <Tab></Tab>
  </div>,
  document.getElementById('root')
)
