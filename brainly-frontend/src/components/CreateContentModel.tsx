import { useRef, useState } from "react";
import { Button } from "./Button";
import { CloseIcon } from "./CloseIcon";

enum ContentType {
  YOUTUBE = "youtube",
  TWITTER = "twitter",
  
}

export function CreateContentModel({ open, onClose }) {
  
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type,setType] = useState("youtube");
  function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

  }
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          
          {/* Modal */}
          <div className="w-[450px] rounded-2xl bg-white p-6 shadow-2xl animate-fadeIn">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Create Content
              </h2>
              <div
                className="cursor-pointer rounded-md p-1 hover:bg-gray-100 transition"
                onClick={onClose}
              >
                <CloseIcon />
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <Input reference={titleRef} placeholder="Title" onChange={() => {}} />
              <Input reference={linkRef} placeholder="Link" onChange={() => {}} />
            </div>

            {/* Footer */}
            <div className="mt-6 flex justify-end">
              <Button size="md" text="Submit" varient="secondary" />
            </div>

          </div>
        </div>
      )}
    </>
  );
}

/* Input Component */
function Input({
  refrence,
  placeholder,
  onChange,
}: {
  refrence: React.RefObject<HTMLInputElement>;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type="text"
      ref={refrence}
      placeholder={placeholder}
      onChange={onChange}
      className="
        w-full rounded-lg border border-gray-300 px-4 py-2.5
        text-sm text-gray-800
        placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-secondary
        transition
      "
    />
  );
}


