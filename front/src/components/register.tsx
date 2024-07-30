'use client'
import { register } from "@/helpers/authHelper";
import { validateRegisterForm } from "@/helpers/formValidation"; 
import { registerErrorProps, registerProps } from "@/types";
import { useState, useEffect } from "react";
import React from 'react';
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [dataUser, setDataUser] = useState<registerProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });
  const [errorUser, setErrorUser] = useState<registerErrorProps>({
    email: "",
    password: "",
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);

    if (!errors.email && !errors.password && !errors.name && !errors.address && !errors.phone) {
      try {
        console.log("Datos a enviar:", dataUser); // Log de datos antes de enviar
        const response = await register(dataUser);
        alert("Registro exitoso");
        router.push("/login");
      } catch (error: any) {
        console.error("Error en el registro:", error.message);
        alert(error.message || "Error en el registro. Por favor, inténtelo de nuevo.");
      }
    } else {
      console.log("El formulario tiene errores:", errors);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(dataUser);
    setErrorUser(errors);
  }, [dataUser]);

  return (
    <div>
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white ">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Bienvenido a <span className="text-[#7747ff]">Hardtech</span>
        </div>
        <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Crea una cuenta</div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="block relative">
            <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
              Email
            </label>
            <input
              placeholder="example@gmail.com"
              onChange={handleChange}
              required
              value={dataUser.email}
              name="email"
              type="text"
              id="email"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
            {errorUser.email && <span className="text-red-500 text-sm">{errorUser.email}</span>}
          </div>
          <div className="block relative">
            <label htmlFor="name" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
              Nombre
            </label>
            <input
              onChange={handleChange}
              required
              value={dataUser.name}
              name="name"
              type="text"
              id="name"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
            {errorUser.name && <span className="text-red-500 text-sm">{errorUser.name}</span>}
          </div>
          <div className="block relative">
            <label htmlFor="address" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
              Dirección
            </label>
            <input
              onChange={handleChange}
              required
              value={dataUser.address}
              name="address"
              type="text"
              id="address"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
            {errorUser.address && <span className="text-red-500 text-sm">{errorUser.address}</span>}
          </div>
          <div className="block relative">
            <label htmlFor="phone" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
              Teléfono
            </label>
            <input
              onChange={handleChange}
              required
              value={dataUser.phone}
              name="phone"
              type="text"
              id="phone"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
            {errorUser.phone && <span className="text-red-500 text-sm">{errorUser.phone}</span>}
          </div>
          <div className="block relative">
            <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">
              Contraseña
            </label>
            <input
              placeholder="**********"
              onChange={handleChange}
              required
              value={dataUser.password}
              name="password"
              type="password"
              id="password"
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
            {errorUser.password && <span className="text-red-500 text-sm">{errorUser.password}</span>}
          </div>
          <button type="submit" className="block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer">
            Registrarse
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          ¿Ya tienes una cuenta? <a className="text-sm text-[#7747ff]" href="/login">Iniciar sesión</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
