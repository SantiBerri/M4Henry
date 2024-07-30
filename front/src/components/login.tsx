'use client';
import { validateLoginForm } from "@/helpers/formValidation";
import { LoginErrorProps, LoginProps } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from '@/context/authContext';
import { Router } from "next/router";

interface UserLoginDto {
  email: string;
  password: string;
}

interface UserResponse {
  token: string;
  user: {
    [key: string]: any;
  };
}

interface UserNoCredentials {
  [key: string]: any;
}



const signIn = async (user: UserLoginDto, login: (token: string, user: any) => void, router: any) => {
  try {
    const response = await fetch('http://localhost:3000/users/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    
    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message);
    }

    const res: UserResponse = await response.json();

    const userFilter: UserNoCredentials = Object.keys(res.user)
      .filter((item) => item !== "credential")
      .reduce((obj: UserNoCredentials, item: string) => {
        obj[item] = res.user[item];
        return obj;
      }, {});
    
    login(res.token, userFilter);
    router.push("/");
  } catch (err) {
    console.log(err);
  }
};

const Login = () => {

  const [dataUser, setDataUser] = useState<LoginProps>({
    email: "",
    password: "",
  });
  
  const [errorUser, setErrorUser] = useState<LoginErrorProps>({
    email: "",
    password: "",
  });
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { login } = useAuth(); 
  const router = useRouter();

  const {isAuthenticated} = useAuth();
  if (isAuthenticated)
  router.push('/');


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
  
    const errors = validateLoginForm(dataUser);
    setErrorUser(errors);
  
    if (!errors.email && !errors.password) {
      try {
        await signIn(dataUser, login, router); 
      } catch (error) {
        if (typeof error === 'string') {
          console.error("Error logging in:", error);
          setServerError(error);
        } else {
          console.error("Error logging in:", error);
          setServerError("Error desconocido");
        }
      }
    } else {
      console.log("Form has errors:", errors);
    }
  
    setLoading(false);
  };

  return (
    <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
      <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
        Bienvenido a <span className="text-[#7747ff]">Hardtech</span>
      </div>
      <div className="text-sm font-normal mb-4 text-center text-[#1e0e4b]">
        Log in to your account
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="block relative">
          <label
            htmlFor="email"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
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
          {errorUser.email && (
            <span className="text-red-500 text-sm">{errorUser.email}</span>
          )}
        </div>
        <div className="block relative">
          <label
            htmlFor="password"
            className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
          >
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
          {errorUser.password && (
            <span className="text-red-500 text-sm">{errorUser.password}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`block hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 rounded-full bg-lpurple shadow-lg shadow-indigo-500/50 text-white text-center cursor-pointer ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Cargando...' : 'Iniciar sesión'}
        </button>
        {serverError && (
          <div className="text-red-500 text-sm text-center mt-2">
            {serverError}
          </div>
        )}
      </form>
      <div className="text-sm text-center mt-[1.6rem]">
        No tienes una cuenta?{" "}
        <a className="text-sm text-[#7747ff]" href="/login/register">
          Regístrate
        </a>
      </div>
    </div>
  );
};

export default Login;
