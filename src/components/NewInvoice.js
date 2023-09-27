import React from "react";
import "../Stylesheet/forms.css";

const NewInvoice = () => {
  return (
    <section className="font-euclid-circular-a w-full pr-2">
      <h2 className="mb-5 text-zinc-600 text-opacity-80 text-xl font-semibold leading-7 tracking-wide">
        Create invoice
      </h2>
      <div className="w-[700px] h-[0px] border border-zinc-800 border-opacity-20" />
      <form className="appt_form">
        <label htmlFor="name">Name of client</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Audrey Freeborn"
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          className="h-[118px]"
          placeholder="Enter a description..."
        />
        <label htmlFor="department">Responsible department</label>
        <input
          id="department"
          type="text"
          name="department"
          placeholder="Enter responsible department"
        />
        <label htmlFor="amount">Amount</label>
        <div className="flex items-center amount_input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 18V7.052C6.99993 6.81932 7.07715 6.59322 7.21952 6.40919C7.36189 6.22515 7.56136 6.09363 7.7866 6.03526C8.01183 5.97689 8.25008 5.99499 8.46391 6.08671C8.67774 6.17843 8.85506 6.33858 8.968 6.542L15.032 17.458C15.1449 17.6614 15.3223 17.8216 15.5361 17.9133C15.7499 18.005 15.9882 18.0231 16.2134 17.9647C16.4386 17.9064 16.6381 17.7748 16.7805 17.5908C16.9229 17.4068 17.0001 17.1807 17 16.948V6M5 10H19M5 14H19"
              stroke="#4D4D4D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input id="amount" type="text" name="amount" />
        </div>
        <label htmlFor="date">Due Date</label>
        <div className="custom_date">
          <input
            className="date_input"
            type="date"
            id="date"
            name="date"
            placeholder="DD/MM/YYYY"
          />
        </div>
        <div className="flex justify-end mt-3">
          <button className="document_button">Continue</button>
        </div>
      </form>
    </section>
  );
};

export default NewInvoice;
