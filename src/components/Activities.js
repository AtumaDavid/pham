import React from 'react'
import groupimg from '../images/group.png'
import '../Stylesheet/activities.css'
import {RiArrowRightUpLine, RiArrowLeftDownLine} from 'react-icons/ri'

const Activities = () => {

    const activitiesData = [
        {
            id: 1,
            title: "New prescription created -  Adetunji Tobi ",
            body:"Fri Jun 15, 2022  GMT 13:00",
            icon: <RiArrowRightUpLine/>,
            type: "created"

        },
        {
            id: 2,
            title: "Prescription Dispensed -  Adetunji Tobi ",
            body:"Fri Jun 15, 2022  GMT 13:00",
            icon: <RiArrowLeftDownLine/>,
            type: "dispersed"

        },
        {
            id: 3,
            title: "New prescription created -  Adetunji Tobi ",
            body:"Fri Jun 15, 2022  GMT 13:00",
            icon: <RiArrowRightUpLine/>,
            type: "created"

        },
        {
            id: 4,
            title: "New prescription created -  Adetunji Tobi ",
            body:"Fri Jun 15, 2022  GMT 13:00",
            icon: <RiArrowRightUpLine/>,
            type: "created"


        },
        {
            id: 5,
            title: "Prescription Dispensed -  Adetunji Tobi ",
            body:"Fri Jun 15, 2022  GMT 13:00",
            icon: <RiArrowLeftDownLine/>,
            type: "dispersed"
        },
        
    ]


  return (
    <div className="activities">
        <div className="header_act"><h2>Recent Activities</h2> <p>View All</p></div>
     {activitiesData.length > 0 ? (
        // Render content when data is available
        <ul className="data">
            {activitiesData.map((item)=>
                <li key={item.id}>
                    <span className={`activity_icon ${item.type}`}>{item.icon}</span>
                    <div className="text">
                        <h2>{item.title}</h2>
                        <p> {item.body} </p>
                    </div>
                </li>
            )}
        </ul>
    ) : (
        // Render content when data is not available
        <div className="no_data">
        <div className="no_data_body">
            <h2>You have no previous prescriptions</h2>
            <p>
                <span>
                Create a new prescription through the Prescriptions manager dropdown
                </span> <br />
                Go to Prescriptions manager Add new prescription.
            
            </p>
        </div>
        <div className="no_image">
            <img src={groupimg} alt="" />
        </div>

    </div>
      )}        
        
    </div>
  )
}

export default Activities
