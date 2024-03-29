import React from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputForm } from "../components/iu/InputForm";
import { LabelForm } from "../components/iu/LabelForm";
import { useContactForm } from "../hooks/useContactForm";

export const Contact = () => {
  const { formData, handleChange, resetForm } = useContactForm();

  const sendEmail = async (e) => {
    e.preventDefault();

    toast.info("Enviando correo...");

    try {
      const result = await emailjs.sendForm(
        "service_49wzh78",
        "template_jyrguyn",
        e.target,
        "h1qEM6zh2JL5wwGkp"
      );
      toast.success("¡Correo enviado con éxito!");

      resetForm();
    } catch {
      toast.error("Hubo un error al enviar el correo.");
    }
  };

  return (
    <>
      <nav className="pb-10" id="contacto">
        <div className="w-full max-w-md m-auto" onSubmit={sendEmail}>
          <form className="bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4 ">
            <h2 className="titulos text-center">Contactame</h2>
            <div className="mb-4">
              <LabelForm htmlFor="correo">Nombre</LabelForm>
              <InputForm
                id="nombres"
                name="nombre"
                type="text"
                placeholder="Ingresa tu nombre"
                value={formData.nombre}
                onChange={handleChange}
              ></InputForm>
            </div>
            <div className="mb-4">
              <LabelForm htmlFor="correo">Correo</LabelForm>
              <InputForm
                id="correo"
                name="correo"
                type="email"
                placeholder="example@gmail.com"
                value={formData.correo}
                onChange={handleChange}
              ></InputForm>
            </div>
            <div className="mb-4">
              <LabelForm htmlFor="correo">Tu comentario</LabelForm>
              <textarea
                name="mensaje"
                placeholder="Escribe"
                className="w-full px-4 py-3 max-h-36 h-24 resize-y text-black bg-white border border-gray-200 rounded-xl appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                maxLength={150}
                value={formData.mensaje}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-lg font-medium w-full py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};
