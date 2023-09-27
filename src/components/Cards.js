import React from 'react'
import vector from '../images/Vector.png'
const Cards = () => {

    const Card = [
        {   
           id: 1,
           no: 0,
           text: "All Prescriptions"
        },
        {   
            id: 2,
            no: 0,
            text: "Purchased Prescriptions"
         },
         {   
            id: 3,
            no: 0,
            text: "Expired Prescriptions"
         },
    ]

  return (
    <div className="cards">
        {Card.map((item)=>
            <div key={item.id} className="card_div">
                <div className="card_text">
                    <span>{item.no}</span>
                    <p>{item.text}</p>
                </div>
                <img src={vector} alt="" />
            </div>
        )}
    </div>
  )
}

export default Cards



 

