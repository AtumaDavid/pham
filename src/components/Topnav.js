import React from 'react'
import { useLocation } from 'react-router-dom';
import '../Stylesheet/prescription.css'
import {FaBell} from 'react-icons/fa'
import {RiSettings4Fill} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'
import profile from '../images/profile.png'




const Topnav = () => {
    


  const location = useLocation();

    let heading;

    switch  (location.pathname) {
        case '/dashboard':
            heading = 'Dashboard';
            break;

        case '/prescription':
            heading = 'Prescriptions';
            break;

        case '/patients':
            heading = 'Patients';
            break;

            case '/appointments':
                heading = 'Appointments';
                break;
        default:
        
    }
  return (
    <div className="top_nav">
        <h1>{heading}</h1>
        <div className="top_nav_icons">
            <FaBell/>
            <RiSettings4Fill/>
            <div className="nav_profile">
                <img src={profile} alt="" />
                <p>Chioma A.</p>
                <span><IoIosArrowDown/></span>
            </div>
        </div>
    </div>
  )
}

export default Topnav