import React from "react";
//? Importamos los componentes de React Router para generar el sistema de rutas de la app
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//? Importamos todas las views para poder usarlas en las rutas
import App from "../App.jsx";
import Home from "../views/Home.jsx";
import About from "../views/About.jsx";
import NotFound404 from "../views/NotFound404.jsx";
import Contact from "../views/Contact.jsx";
import Ideas from "../views/Ideas.jsx";

//? Creamos el componente Router que será el encargado de generar el sistema de rutas
const Router = () => {
  //? Crear el sistema de rutas
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ideas" element={<Ideas />} />
          //? Ruta 404 (Not Found)
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
