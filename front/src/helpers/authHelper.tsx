import { registerProps } from "@/types";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function register(data: registerProps) {
  try {
    console.log("Datos enviados:", data); // Log de datos enviados

    const response = await fetch(`${apiUrl}/users/register`, { // Asegúrate de que la URL es correcta
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // Verificar el tipo de contenido de la respuesta
    const contentType = response.headers.get("content-type");
    console.log("Tipo de contenido de la respuesta:", contentType);

    if (!response.ok) {
      const errorData = await response.text(); // Usar text() en lugar de json() para ver la respuesta completa
      console.error("Respuesta del servidor (error):", errorData);
      throw new Error(errorData || "Error en el registro");
    }

    // Verificar si la respuesta es JSON
    if (contentType && contentType.includes("application/json")) {
      const result = await response.json();
      console.log("Registro exitoso:", result);
      return result;
    } else {
      const result = await response.text();
      console.error("Respuesta inesperada del servidor:", result);
      throw new Error("Respuesta inesperada del servidor");
    }
  } catch (error) {
    console.error("Error en el registro:", error);
    throw error;
  }
}
