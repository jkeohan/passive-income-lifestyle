import React from 'react';
import './contact.css';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="contact-us">
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Name" />
        <input name="email" type="text" placeholder="Email" />
        <textarea name="message" rows="10" cols="30" placeholder="Message" />
        <button>Get In Touch</button>
      </form>
      <aside>Add some text here about were so excited to hear from them</aside>
      <div class="gradient_container_top" />
    </section>
  );
}

export default Contact;
