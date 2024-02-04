import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavHeader from "./components/shared/NavHeader";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <main>

      {/* Importamos el componente NavHeader, es decir nuestro navbar */}
      <NavHeader />

      {/* Outlet es el componente de react-router-dom que utilizamos para renderizar el contenido de la ruta actual. */}
      <Outlet />

      {/* Importamos el componente Footer, es decir nuestro pie de página */}
      <Footer />

      {/* Toaster es un componente de react-hot-toast que nos permite mostrar notificaciones en la parte superior de la pantalla. */}
      <Toaster />

    </main>
  );
}

export default App;
