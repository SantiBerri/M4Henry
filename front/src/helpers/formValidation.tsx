import { LoginErrorProps, LoginProps } from "@/types";
import { registerErrorProps, registerProps } from "@/types";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?[1-9]\d{1,14}$/;

export function validateLoginForm(values: LoginProps): LoginErrorProps {
    let errors: LoginErrorProps = {};
  
    if (!values.email) {
      errors.email = "Inserte email valido";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Email invalido";
    }
  
    if (!values.password) {
      errors.password = "Inserte contraseña";
    }
  
    return errors;
  }

export function validateRegisterForm(values: registerProps): registerErrorProps {
    let errors: registerErrorProps = {};

    if (!values.email) {
        errors.email = "Inserte email valido";
    } else if (!emailRegex.test(values.email)) {
        errors.email = "Email invalido";
    }

    if (!values.password) {
        errors.password = "Inserte contraseña";
    }

    if (!values.name) {
        errors.name = "Inserte nombre";
    }

    if (!values.address) {
        errors.address = "Inserte dirección";
    }

    if (!values.phone) {
        errors.phone = "Inserte número de teléfono";
    } else if (!phoneRegex.test(values.phone)) {
        errors.phone = "Número de teléfono invalido";
    }

    return errors;
}
