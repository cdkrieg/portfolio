import React from "react";
import './Contact.css'

const Contact = () => {
  return (
    <section className="project">
      <div className="title">
        {/* <div className="col-xl-"> */}
        <h2 id="contact">Say Hello!</h2>
        {/* </div> */}
      </div>
      <br />
      <br />
      <form className="form">
        <div className="row">
          <div className="col-sm">

            <div className="form-group">
              <label for="name">Name: </label>
              <input
                className="form-control"
                name="name"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="company">Company: </label>
              <input
                className="form-control"
                type="text"
                name="company"
                id="company"
                placeholder="Enter your company"
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="phone">Phone Number: </label>
              <input
                className="form-control"
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone #"
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label for="email">Email: </label>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div className="col-sm">
          <div className="form-group">
            <label for="message">*What would you like to say?</label>
            <br />
            <textarea
                className="form-control"
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message here"
            ></textarea>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="submit">
          <input type="submit" id="submit"/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
