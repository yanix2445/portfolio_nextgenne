import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
        }, 2000);
      })
      .catch((error) => alert(error));
  };

  const encode = (data: any) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <div>
        <label htmlFor="name">Nom :</label>
        <input type="text" name="name" id="name" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="email">Email :</label>
        <input type="email" name="email" id="email" onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="message">Message :</label>
        <textarea name="message" id="message" onChange={handleInputChange} />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
