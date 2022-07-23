import React from "react";
import PersonImg from "../dp.jpeg";

export default function Info() {
  return (
    <div className=" card-container text-center text-white">
      <img src={PersonImg} alt="dp" className="person-dp" />
      <h1 className="name">Sourabh Chavan</h1>

      <h4 className="job">Fullstack Developer</h4>

      <p className="link">sourabhchavan@gmail.com</p>
      <div className="btns ">
        <button className="btn btn-light me-4 email">
          <i class="fa-solid fa-envelope me-2"></i>Email
        </button>
        <button className="btn btn-primary ">
          <i class="fa-brands fa-linkedin me-2"></i>Linkedin
        </button>
      </div>
    </div>
  );
}
