import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className='flex justify-center shadow-xl'>
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Contacto
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        ¿Tienes alguna pregunta, comentario o sugerencia? ¡Contáctanos!
      </div>
      <form className="flex flex-col gap-3">
        <div className="block relative">
          <label
            htmlFor="name"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Nombre
          </label>
          <input
            placeholder="Nombre"
            required
            type="text"
            id="name"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Email
          </label>
          <input
            placeholder="example@gmail.com"
            required
            type="email"
            id="email"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          />
        </div>
        <div className="block relative">
          <label
            htmlFor="message"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
            Mensaje
          </label>
          <textarea
            placeholder="Escribe tu mensaje aquí..."
            required
            id="message"
            className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-32 resize-none p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
          ></textarea>
        </div>
        <button
          type="submit"
          className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer mb-44"
        >
          Enviar
        </button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
