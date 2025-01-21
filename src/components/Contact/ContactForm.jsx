import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputText, setInputText] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidText, setIsValidText] = useState(false);

  const [isTestedEmail, setIsTestedEmail] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const redBorder = {
    borderColor: "red",
  };

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  function handleSubmit(event) {
    event.preventDefault();

    let valid = true;
    if (inputName === "") {
      setIsValidName(true);
      valid = false;
    }
    if (inputEmail === "") {
      setIsValidEmail(true);
      valid = false;
    } else if (!emailRegex.test(inputEmail)) {
      setIsTestedEmail(true);
      valid = false;
    }

    if (inputText === "") {
      setIsValidText(true);
      valid = false;
    }

    if (valid) {
      const templateParams = {
        to_name: "Igor",
        from_name: inputName,
        reply_to: inputEmail,
        message: inputText,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setInputName("");
          setInputEmail("");
          setInputText("");
          setSuccessMessage(true);

          // Hide success message after 5 seconds
          setTimeout(() => setSuccessMessage(false), 5000);
        },
        (error) => {
          console.error("FAILED...", error);
          setErrorMessage("Failed to send the email. Please try again later.");
        }
      );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 form-group form-container">
        <label htmlFor="inputName" className="form-label mb-2 white-text">
          NAME*
        </label>
        <input
          type="text"
          id="inputName"
          className="form-control input-color grey-text custom-input "
          value={inputName}
          placeholder="YOUR NAME..."
          style={isValidName ? redBorder : null}
          onChange={(event) => {
            setInputName(event.target.value);
            setIsValidName(false);
          }}
        />
        {isValidName && (
          <div
            style={{
              color: "red",

              fontSize: "14px",
            }}
          >
            This field is required
          </div>
        )}

        <label htmlFor="inputName" className="form-label mb-2 mt-4 white-text">
          EMAIL ADRESS*
        </label>
        <input
          id="inputEmail"
          className="form-control input-color  grey-text custom-input "
          value={inputEmail}
          placeholder="YOUR EMAIL..."
          style={isValidEmail || isTestedEmail ? redBorder : null}
          onChange={(event) => {
            setInputEmail(event.target.value);
            setIsValidEmail(false);
            setIsTestedEmail(false);
          }}
        />
        {isValidEmail && (
          <div
            style={{
              color: "red",

              fontSize: "14px",
            }}
          >
            This field is required
          </div>
        )}
        {isTestedEmail && !isValidEmail && (
          <div
            style={{
              color: "red",

              fontSize: "14px",
            }}
          >
            This field must be a valid email address
          </div>
        )}

        <label htmlFor="inputName" className="form-label mb-2 mt-4 white-text">
          MESSAGE*
        </label>
        <textarea
          id="inputText"
          className="form-control input-color  grey-text custom-input "
          value={inputText}
          placeholder="YOUR MESSAGE..."
          style={isValidText ? redBorder : null}
          onChange={(event) => {
            setInputText(event.target.value);
            setIsValidText(false);
          }}
        />
        {isValidText && (
          <div
            style={{
              color: "red",

              fontSize: "14px",
            }}
          >
            This field is required
          </div>
        )}

        <button
          type="submit"
          className="button  px-4 gap-3 mt-4"
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
        >
          <span>SUBMIT</span>
        </button>
        {successMessage && (
          <div style={{ color: "green", fontSize: "16px", marginTop: "20px" }}>
            Email sent successfully!
          </div>
        )}

        {errorMessage && (
          <div style={{ color: "red", fontSize: "16px", marginTop: "20px" }}>
            {errorMessage}
          </div>
        )}
      </div>
    </form>
  );
}
