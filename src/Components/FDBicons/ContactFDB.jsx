import React, { useState } from "react";
import { MessageSquareText } from "lucide-react";

function ContactFDB() {
  const [showform, setShowform] = useState(false);
  const [submitted, setSubmittted] = useState(false)
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")


  const showcontactform = () => {
    setShowform((prev) => !prev);
  };
  const stopPropagation=(e)=>{
    e.stopPropagation();
  }

  const formhandler=(e)=>{
    e.preventDefault();
    setSubmittted(true);
  }

  const handleNamechange=(e)=>{
    setName(e.target.value)
  }

  const handleMessagechange=(e)=>{
    setMessage(e.target.value)
  }


  return (
    <div onClick={showcontactform}>
      <div>
        {showform && !submitted &&  (
          <form
            onSubmit={formhandler}
            onClick={stopPropagation}
            className="m-4 p-4 border-4 shadow-md w-auto fixed bottom-20 right-24 shadow-gray-400 bg-gray-50 flex flex-col rounded-xl "
          >
            <h1 className="text-gray-800 sm:font-bold text-center">
              Get in Contact with us for your
            </h1>
            <h1 className="text-gray-800 sm:font-bold text-center mb-4">queries!</h1>
            <p className="h-0.5 bg-gray-400 rounded-lg m-4 "></p>
            <label className="text-gray-800">Your name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="bg-gray-200 rounded-md p-1 mb-4"
              value={name}
              onChange={handleNamechange}
            />
            <label className="text-gray-800">Message</label>
            <input
              type="text"
              placeholder="Message"
              className="bg-gray-200 rounded-md p-1 mb-4"
              value={message}
              onChange={handleMessagechange}
              required  
            />

            <button
              className={`sm:place-self-end bg-gray-500 rounded-md p-1 mt-2 text-white px-2 py-0  ${message  ? "bg-gray-900" : "bg-gray-500" }`}
            >
              submit
            </button>
          </form>
        )}

        {submitted && (
          <div className="cursor-pointer bg-slate-400 rounded-full right-24 bottom-28  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
            <h1 className="text-center px-1">Thanks for reaching out to us!</h1>
            <h1  className="text-center px-1">We'll will get back to you as soon as possible</h1>
          </div>
        )}
      </div>
      <div className="cursor-pointer bg-slate-400 rounded-full right-8 bottom-28  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
        <MessageSquareText />
      </div>
    </div>
  );
}

export default ContactFDB;
