"use client";
declare global {
  interface Window {
    submitted?: boolean;
  }
}
import { useState } from "react";
import toast from "react-hot-toast";

const MailingList = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Mailing List Form Submitted");
          }
        }}
      />
      <div className="flex min-h-screen items-center justify-center">
        <div className="bg-hcg-gold w-4/5 rounded-2xl p-2">
          <div className="font-hcg-main rounded-2xl border border-white p-10 font-light">
            <div className="mb-10 text-center text-2xl font-bold text-white md:text-5xl">
              Join our Mailing List
            </div>
            {isSubmitted ? (
              <div className="text-hcg-white text-center text-xl md:text-2xl">
                Thank you for joining our mailing list.
              </div>
            ) : (
              <form
                className="space-y-6"
                action="https://docs.google.com/forms/d/e/1FAIpQLSdYBvXdgNPhcUOxQMAhJedkRtwbUObEo_49t2xPZTRn6jIjvw/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={() => {
                  window.submitted = true;
                }}
              >
                <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
                  <div className="flex-1">
                    <div className="mb-2 text-lg text-white">First Name</div>
                    <input
                      className="w-full bg-white p-3 focus:outline-none"
                      name="entry.2094777015"
                      required
                    />
                  </div>
                  <div className="hidden flex-1 md:block">
                    <div className="mb-2 text-lg text-white">Last Name</div>
                    <input
                      className="w-full bg-white p-3 focus:outline-none"
                      name="entry.222275708"
                      required
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-2 text-lg text-white">Email</div>
                  <input
                    className="w-full bg-white p-3 focus:outline-none"
                    name="entry.1315568053"
                    required
                  />
                </div>
                <div className="mt-6 flex justify-center md:justify-start">
                  <button className="cursor-pointer rounded-lg bg-black px-12 py-2 text-lg text-white">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MailingList;
