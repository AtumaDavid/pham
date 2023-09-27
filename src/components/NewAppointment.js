import React from "react";
import "../Stylesheet/forms.css";

const NewAppointment = () => {
  return (
    <section className="font-euclid-circular-a w-full pr-2">
      <h2 className="mb-5 text-zinc-600 text-opacity-80 text-xl font-semibold leading-7 tracking-wide">
        Schedule Appointment
      </h2>
      <div className="w-[700px] h-[0px] border border-zinc-800 border-opacity-20" />
      <form className="appt_form">
        <label htmlFor="title">Title of Appointment</label>
        <input
          className="titleInput"
          type="text"
          id="title"
          name="title"
          placeholder="Enter appointment title"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="h-[118px]"
          placeholder="Enter a description..."
        />
        <label htmlFor="department">Responsible Department</label>
        <input
          type="text"
          id="department"
          name="department"
          placeholder="Enter responsible department"
        />
        <label htmlFor="personnel">Assigned personnel</label>
        <input
          type="text"
          id="personnel"
          name="personnel"
          placeholder="Enter assigned personnel"
        />
        <label htmlFor="date">Execution Date</label>
        <div className="custom_date">
          <input
            className="date_input"
            type="date"
            id="date"
            name="date"
            placeholder="DD/MM/YYYY"
          />
        </div>

        <div className="flex justify-between custom_time">
          <div>
            <label htmlFor="start_time">Start Time</label>
            <input
              id="start_time"
              type="time"
              placeholder="00:00"
              value="00:00"
            />
          </div>

          <div>
            <label htmlFor="end_time">End Time</label>
            <input
              id="end_time"
              type="time"
              placeholder="00:00"
              value="00:00"
            />
          </div>
        </div>

        <label htmlFor="appt_type">Appointment type</label>
        <select id="appt_type">
          <option disabled selected hidden>
            Select appointment type
          </option>
          <option>In person</option>
          <option>Virtual</option>
        </select>
      </form>
    </section>
  );
};

export default NewAppointment;
