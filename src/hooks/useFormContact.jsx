import { useEffect, useId, useState } from "react";
import emailjs from "@emailjs/browser";
export function useFormContact() {
  const nameId = useId();
  const emailId = useId();
  const subjectId = useId();
  const textAreaId = useId();
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
  const [dataForm, setDataForm] = useState(null);
  const [isValidTextArea, setIsValidTextArea] = useState({
    overflowed: false,
    charge: true,
  });
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);
  useEffect(() => {
    if (!dataForm) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        dataForm,
      )
      .then((response) => {
        console.log("Formulario enviando! ", response);
      });
  }, [dataForm]);
  function sendMail(form) {
    // const formData = new FormData(form);
    setDataForm(form);
    // setDataForm({
    //   name: formData.get(nameId),
    //   email: formData.get(emailId),
    //   subject: formData.get(subjectId),
    //   message: formData.get(textAreaId),
    // });
  }
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
      sendMail(event.currentTarget);
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
    sendMail,
    nameId,
    emailId,
    subjectId,
    textAreaId,
  };
}
