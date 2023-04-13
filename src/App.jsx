import "./App.css";
import Layout from "./layout/Layout";
import Accueil from "./pages/Accueil";
import Films from "./pages/Films";
import Modele from "./pages/Modele";



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
        <Route index element={<Accueil/>}/>
        <Route path="/Films" element={<Films/>}/>
        <Route path="/Modele/:Donnees" element={<Modele />}/>
        </Route>
  )
);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;