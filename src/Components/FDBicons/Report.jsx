import React, { useState } from "react";
import { Flag, ChevronDown } from "lucide-react";

function Report() {
  const [repot, setReport] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const showcontact = () => {
    setReport((prev) => !prev);
  };

  const reporthandler = (e) => {
    e.preventDefault();
    setSubmitted(true)
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  
  const handlermessage=(e)=>{
    setMessage(e.target.value)
  }

  return (
    <div onClick={showcontact}>
      <div>
        {repot && !submitted && (
          <form
            onSubmit={reporthandler}
            onClick={stopPropagation}
            className="right-24 fixed bottom-60 m-4 flex w-auto flex-col rounded-xl border-4 bg-gray-50 p-4 shadow-md shadow-gray-400"
          >
            <h1 className="text-gray-800 sm:font-bold text-center ">
              Let us know about the issue
            </h1>
            <h2 className="sm:text-center ">you are facing right now!</h2>
            <p className="sm:h-0.5 bg-gray-400 m-4 mb-3"></p>
            <label className="text-gray-800">Choose a section</label>
            <select
              name="Interview Question"
              id=""
              className="border-2 rounded-md p-1 mb-4 "
              onClick={stopPropagation}
            >
              <option value="">Interview Question</option>
            </select>

            <label className="text-gray-800 ">
              Describe the issue in detail
            </label>
            <textarea
              name="message"
              value={message}
              cols="30"
              rows="4"
              required
              className="border-2 text-gray-600 mb-4"
              onChange={handlermessage}
            >
              write here...
            </textarea>
            <button className={`mt-2 rounded-md bg-gray-500 p-1 px-2 py-0 text-white sm:place-self-end  ${message ? "bg-gray-900" : "bg-gray-600" }`}>
              Submit
            </button>
          </form>
        )}
        {submitted && 
        (
          <div className="cursor-pointer bg-slate-400 rounded-full right-24 bottom-96  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
            <h1 className="text-center px-1">Thanks for bringing the issue to our attention.</h1>
            <h1  className="text-center px-1">We'll review it shortly and provide an update soon!</h1>
          </div>
        )}
      </div>
      <div className="cursor-pointer bg-slate-400 rounded-full right-8 bottom-96  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
        <Flag />
      </div>
    </div>
  );
}

export default Report;
