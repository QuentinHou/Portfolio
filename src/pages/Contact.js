import React from "react";
import ContactForm from "../components/ContactForm";
import Mouse from "./../components/Mouse";
import Logo from "./../components/Logo";
import Navigation from "./../components/Navigation";
import Buttons from "./../components/Buttons";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "./../components/SocialNetwork";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };

  return (
    <main>
      <Mouse />
      <motion.div
        className="contact"
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>Adresse</h4>
              <p>4bis rue paul Doumer</p>
              <p>64 000 Pau</p>
            </div>
          </div>
          <div className="phone">
            <div className="content">
              <h4>Téléphone</h4>
              <CopyToClipboard text="0630997800" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Téléphone Copié!")}
                >
                  06 30 99 78 00
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className="email">
            <div className="content">
              <h4>Email</h4>
              <CopyToClipboard
                text="quentinhou.pro@gmail.com"
                className="hover"
              >
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Email copié !")}
                >
                  quentinhou.pro@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
        </div>

        <Buttons left={"/projet-2"} />
      </motion.div>
    </main>
  );
};

export default Contact;
