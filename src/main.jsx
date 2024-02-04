import ReactDOM from 'react-dom/client'
//? Importamos el archivo de estilos de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//? Importamos el sistema de rutas
import Router from "./router/Router";
//? Importamos el archivo de estilos global
import  "../src/static/styles/global.modules.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router />
)
