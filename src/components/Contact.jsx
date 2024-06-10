import React from "react";

/*
Download svg for the following things
- facebook icon
- instagram icon
- twitter icon
- linkedn iCon
*/
export default function Contact() {
  return (
    <main>
      <div className="p-8 bg-blue text-white">
        <div>
          <h1 className="font-bold">Stay Connected With Us</h1>
          <a href="#">
            <img src="" alt="Facebook Link" />
          </a>
          <a href="#">
            <img src="" alt="Instagram Link" />
          </a>
          <a href="#">
            <img src="" alt="Twitter Link" />
          </a>
          <a href="#">
            {" "}
            <img src="" alt="Linkedin Link" />
          </a>
        </div>
        <div className="flex justify-end">
          <h1 className="font-bold">Contact Us</h1>
          <p>
            Email Us:
            <a href="mailto:fanhubstore@gmail.com" className="block">
              fanhubstore@gmail.com
            </a>
          </p>
          <p className="block">
            Phone: <span>+255 623 216 660</span>
          </p>
          <p className="block">Location: Njox Road ST Ochi</p>
        </div>
      </div>
    </main>
  );
}
