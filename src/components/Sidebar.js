import React from 'react'
import logo from '../images/logo.png'
import {NavLink} from 'react-router-dom'
import{RiQuestionnaireFill} from 'react-icons/ri'
import {RiHome5Fill} from 'react-icons/ri'
import '../Stylesheet/prescription.css'


const Links = [
  {
    id : 1,
    icon: <RiHome5Fill/>,
    text: "Dashboard",
    to: "/dashboard"
  },
  {
    id : 2,
    icon: <RiHome5Fill/>,
    text: "Prescriptions",
    to: "/prescription"
  },
  {
    id : 3,
    icon: <RiHome5Fill/>,
    text: "Patients",
    to: '/patients'
  },
  {
    id : 4,
    icon: <RiHome5Fill/>,
    text: "Appointments",
    to: "/appointments"
  },
  {
    id : 5,
    icon: <RiQuestionnaireFill/>,
    text: "Help-Desk",
    to: "/help-desk"

  },
  

]


const Sidebar = ({children}) => {
  return (
    <div className='main_side'>
      <div className="sidebar">
      <img src={logo} alt="logo" />

      <div className="nav_link">
        {Links.map((item)=> <NavLink activeClassName="active" to={item.to} key={item.id}>         
         {item.icon} <span>{item.text}</span>
        </NavLink>
        )}
      </div>
     


      <div className="log_out">        
        <NavLink to='./login' className='log-out'>
        <RiQuestionnaireFill/><span>Logout</span>
        </NavLink>
      </div>
     
    </div>
    <main>{children}</main>
    </div>
  
  )
}

export default Sidebar