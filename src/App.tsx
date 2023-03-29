import "./App.css";

import Home from "./pages/home";
import Search from "./pages/search";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Favorites from "./pages/favorites";
import Layout from "./components/layout";
import { FavoriteCocktailsProvider } from "./context/FavoriteCocktailsContext";
import { SnackbarProvider } from "notistack";
function App() {
  const routers = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Search />,
        },
        {
          path: "/favorites",
          element: <Favorites />,
        },
      ],
    },
  ]);
  return (
    <SnackbarProvider>
      <FavoriteCocktailsProvider>
        <RouterProvider router={routers} />
      </FavoriteCocktailsProvider>
    </SnackbarProvider>
  );
}

export default App;
