import React, { useState } from "react";
import ContactFDB from "./FDBicons/ContactFDB";
import Report from "./FDBicons/Report";
import ShareFDB from "./FDBicons/ShareFDB";
import Suggestion from "./FDBicons/Suggestion";
import { ClipboardPen, X } from "lucide-react";

function Feedback() {
  const [FDBicon, setFDBicon] = useState(false);
  const togglerBar = () => {
    setFDBicon((prev) => !prev);
  };

  return (
    <div className="">
      <div>
        {FDBicon && (
          <div >
            <ContactFDB/>
            <ShareFDB />
            <Report />
            <Suggestion />
          </div>
        )}
      </div>
      <div
        onClick={togglerBar}
        className="cursor-pointer bg-slate-400 rounded-full right-8 bottom-8  min-w-fit fixed p-3 shadow-xl  shadow-slate-600"
      >
        {FDBicon === true ? <X /> : <ClipboardPen />}
      </div>
    </div>
  );
}

export default Feedback;
