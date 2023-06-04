# Trabajo practico N°1: React - Clima!

![React](https://blog.wildix.com/wp-content/uploads/2020/06/react-logo.jpg)

Ejercicio 13 del TP N°1-React: Clima.
Es una aplicacion web donde ingresas un pais o localidad y te muestra el clima de la zona ingresada.

La imformacion del clima se saca de la API: https://openweathermap.org/

## Para clonar el repositorio 💻

```bash
git clone https://github.com/Fedreric/practicoReact-13.git
```
>**EJECUTAR:** 
- npm install
- npm run dev 
- https://practicoreact-13-fede39i.netlify.app/

>**AVISO:** Si la app dejase de funcionar y en consola se ve "BLOCKED BY CORS POLICY, seguir estos pasos:
- Clonar el repositorio como muestra arriba, pero no ejecutes el npm run dev.
- Crearse una cuenta y loguea en: https://openweathermap.org/
- Click en tu nombre arriba a la derecha y precionar: My API Keys y copia el codigo "Key" (Si no aparece, generalo)
- Remplaza los [] en esta linea del codigo que se encuentra en el componente Formulario.jsx (Borra los corchetes): 
- const respuesta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${pais}&appid=[436b5789015431fd04ad33ddb1024d71]&lang=es`
      );
- Guarda los cambios y ejecuta el npm run dev nuevamente.

## Autor 👨‍💻
 Federico Luciano Ledesma [GitHub](https://github.com/Fedreric)
