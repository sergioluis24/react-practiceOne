import { useState } from "react";

export function useFormContact(form) {
  const [isValidName, setIsValidName] = useState({
    valid: false,
    empty: false,
    charge: true,
  });
  const [isValidEmail, setIsValidEmail] = useState({
    valid: false,
    empty: false,
    charge: true,
  });
  const [isValidSubject, setIsValidSubject] = useState({
    empty: false,
    charge: true,
  });
  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isValidTextArea, setIsValidTextArea] = useState({
    overflowed: false,
    charge: true,
  });
  //   function sendMail() {
  //     emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  //     emailjs.sendForm(
  //       import.meta.env.VITE_EMAILJS_SERVICE_ID,
  //       import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  //       form,
  //     );
  //   }
  const handleValidationName = (event) => {
    let input = event.target.value;
    const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñÜü]+)*$/;
    if (!nameRegex.test(input)) {
      setIsValidName({
        valid: false,
        empty: true,
        charge: false,
      });
    } else
      setIsValidName({
        valid: true,
        empty: true,
        charge: false,
      });
    if (!input)
      setIsValidName({
        valid: true,
        empty: false,
        charge: false,
      });
  };
  const handleValidationEmail = (event) => {
    let input = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input)) {
      setIsValidEmail({
        valid: false,
        empty: true,
        charge: false,
      });
    } else
      setIsValidEmail({
        valid: true,
        empty: true,
        charge: false,
      });
    if (!input)
      setIsValidEmail({
        valid: true,
        empty: false,
        charge: false,
      });
  };
  const handleSubject = (event) => {
    if (event.target.value !== "") {
      setIsValidSubject({
        empty: true,
        charge: false,
      });
    } else {
      setIsValidSubject({
        empty: false,
        charge: false,
      });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isValidName.valid &&
      isValidName.empty &&
      isValidEmail.valid &&
      isValidEmail.empty &&
      isValidSubject.empty &&
      isValidTextArea.overflowed
    ) {
      console.log("Se ha enviado el formulario");
    }
  };
  const handleTextArea = (event) => {
    const MAX = 255;
    if (event.target.value.length >= MAX) {
      setIsValidTextArea({
        charge: false,
      });

      return;
    } else
      setIsValidTextArea({
        overflowed: true,
        charge: false,
      });
  };

  return {
    isValidName,
    isValidEmail,
    isValidSubject,
    isValidTextArea,
    handleValidationName,
    handleValidationEmail,
    handleSubject,
    handleTextArea,
    handleSubmit,
    // sendMail,
  };
}
