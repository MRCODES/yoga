import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const useContact = () => {



    return (
      

        <body>
            <NavBar />
            
    <div>
      <img className="team-logo" src="/img/chakra-bw.png" alt="" />
      <h1>Contact Us!</h1>
      <div id="form-cont">
        <div className="icon_wrapper">
          <img
            src="https://i.pinimg.com/originals/94/65/b5/9465b5f976c5a39c60eee6e5a121c249.png"
            alt=""
            id="phone"
          />
        </div>
        <form action="#" method="post" id="contact_form">
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              id="email_input"
              required
            />
          </div>
          <div className="telephone">
            <label htmlFor="telephone"></label>
            <input
              type="text"
              placeholder="My number is"
              name="telephone"
              id="telephone_input"
              required
            />
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea
              name="message"
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
            </div>

            <Footer />
            
            </body>
  );
};

export default useContact;
