import "./App.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Movies from "./components/Movies";
import Navlayout from "./components/Navlayout";
import Trailer from "./components/Trailer";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navlayout />}>
      <Route path="movies" element={<Movies />} />
      <Route path="trailer" element={<Trailer />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
