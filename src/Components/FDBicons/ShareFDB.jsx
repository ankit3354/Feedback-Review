import React, { useState } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";

function ShareFDB() {
  const [feedback, setFeedback] = useState(false);
  const [submitted, setSubmitted ] = useState(false);
  const [message, setMessage] = useState('')

  const formHandler=(e)=>{
    e.preventDefault()
    setSubmitted(true);
  }

  const feedbackhandler = () => {
    setFeedback((prev) => !prev);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };
  
  const messagehandler=(e)=>{
    setMessage(e.target.value)
  }

  return (
    <div
      onClick={feedbackhandler}
      className="cursor-pointer bg-slate-400 rounded-full right-8 bottom-72  min-w-fit fixed p-3 shadow-xl shadow-slate-600"
    >
      <div>
        {feedback && !submitted && (
          <form
            onSubmit={formHandler}
            onClick={stopPropagation}
            className="right-20 fixed bottom-40 m-4 flex w-auto flex-col rounded-xl border-4 bg-gray-50 p-4 shadow-md shadow-gray-400"
          >
            <h1 className="text-center text-gray-800 sm:font-bold">
              Let me know your Feedback
            </h1>
            <h2 className="sm:text-center">about us!</h2>
            <p className="m-4 mb-3 bg-gray-400 sm:h-0.5"></p>
            <textarea
              name="feedback"
              cols="30"
              value={message}
              required
              rows="4"
              onChange={messagehandler}
              className="mb-4 border-2 text-gray-600 p-2"
            >
              write here...
            </textarea>
            <div className="flex flex-row gap-2 ">
              <input type="checkbox" name="" id="" className="" />
              <label className="text-gray-600">send Feedback anonymously</label>
            </div>
            <button
              className={`mt-2 rounded-md bg-gray-500 p-1 px-2 py-0 text-white sm:place-self-end  ${message ? "bg-gray-900" : "bg-gray-600" }`}
            >
              Submit
            </button>
          </form>
        )}

        {submitted && ( 
        <div className="cursor-pointer bg-slate-400 rounded-full right-24 bottom-72  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
          Thanks for your valuable feedback!
        </div>)}
      </div>
      <div className="rounded-full">
        <ThumbsDown />
      </div>
    </div>
  );
}

export default ShareFDB;
