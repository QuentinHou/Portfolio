import React, { useRef } from "react";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
init(process.env.REACT_APP_ID);

const contactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_78f9xrv",
        "template_in5wtyl",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = "<p class='success'> Message envoyé ! </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
          formMess.innerHTML =
            "<p class='error'> Une erreur s'est produite, veuillez réessayer ! </p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>Contactez-moi</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Votre nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Votre email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Votre message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default contactForm;
