import React, { useState } from "react";
import { CalendarRange } from "lucide-react";

function Suggestion() {
  const [sugsestion, setSiggestion] = useState(false);
  const [submitted, setSubmitted] = useState(false)
  const [message,setMessage] = useState('')

  const suggestionhanlder = () => {
    setSiggestion((prev) => !prev);
  }
  const stopPropagation=(e)=>{
    e.stopPropagation();
  }

  const formhandler=(e)=>{
    e.preventDefault()
    setSubmitted(true);
  }

  const messagehandler=(e)=>{
    setMessage(e.target.value)
  }

  return (
    <div onClick={suggestionhanlder}>
      <div>
        {sugsestion && !submitted && (
          <form
            onSubmit={formhandler}
            onClick={stopPropagation}
            className="right-20 fixed bottom-20 m-4 flex w-auto flex-col rounded-xl border-4 bg-gray-50 p-4 shadow-md shadow-gray-400"
          >
            <h1 className="text-center text-gray-800 sm:font-bold">
              Share your suggestion with us for
            </h1>
            <h1 className="text-center text-gray-800 sm:font-bold">
              a chance to earn rewards
            </h1>

            <p className="m-4 mb-3 bg-gray-400 sm:h-0.5"></p>
            <label className="text-gray-800">Choose a section</label>
            <select className="mb-4 rounded-md border-2 p-1">
              <option value="">Select</option>
            </select>
            <label className="">Describe the suggestion in detail</label>
            <textarea
              name='message'
              value={message}
              required
              onChange={messagehandler}
              cols="30"
              rows="4"
              className="mb-4 border-2 p-2 text-gray-600"
            >
              write here...
            </textarea>
            <button
              type="submit"
             className={`mt-2 rounded-md bg-gray-500 p-1 px-2 py-0 text-white sm:place-self-end ${message ? "bg-gray-900" : "bg-gray-500" }` }>
              Submit
            </button>
          </form>
        )}

        {submitted && (
        <div className="cursor-pointer bg-slate-400 rounded-full right-24 bottom-48  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
          Thanks for your valuable suggestion!
        </div>
        )}

      </div>
      <div className="cursor-pointer bg-slate-400 rounded-full right-8 bottom-48  min-w-fit fixed p-3 shadow-xl  shadow-slate-600">
        <CalendarRange />
      </div>
    </div>
  );
}

export default Suggestion;
