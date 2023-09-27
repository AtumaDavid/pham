import React from 'react'

export default function AppointmentTask(props) {
  return (
    <div>
    <div className="border border-gray-400 rounded w-[550px]  ml-[300px] mt-24 h-[400px]  ">
    <h1 className="text-xl font-bold ml-3 mt-4 text-gray-600">
        Task description
        </h1>
        <div className='pl-7'>
        <p className='pt-5 font-semibold'>Task description for appointment</p>
        <textarea name="" id="" cols="60" rows="8" className='border mt-2 rounded p-2' placeholder='Enter your description here' ></textarea>
        </div>
       
        <div className="mt-3 flex">
              <button className="border-sky-600 border text-sky-500 mb-4 p-2 w-36 rounded ml-[190px]" onClick={props.onBack}>
               Back
              </button>
              <button className="bg-sky-600 text-white mb-4 p-2 w-36 rounded ml-3" onClick={props.onContinue}>
                Continue
              </button>
            </div>



    </div>
    </div>
  )
}
