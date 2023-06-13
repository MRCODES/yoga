import React, { useState } from 'react';

const SignUpForm = () => {



  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values using the state variables: firstName, lastName, email
    // Example: sendFormSubmission(firstName, lastName, email);
    // Replace the example sendFormSubmission function with your actual logic
  };

  return (
    <div className="parent-contact-form">
      <h4>Sign Up for Announcements!</h4>
      <br />
      <form onSubmit={handleSubmit} action="https://formsubmit.co/marjr1219gmail.com" method="POST" id="contact-form">
        <label htmlFor="name">First Name:</label>
        <br />
        <input type="text" name="name" id="name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <br />
        <label htmlFor="surname">Last Name:</label>
        <br />
        <input type="text" name="surname" id="surname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <input type="submit" value="Send" id="btn" />
      </form>
    </div>
  );
};

export default SignUpForm;
