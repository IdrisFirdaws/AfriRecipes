import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//layout
import RootLayout from "./layout/RootLayout";
import RecipesLayout from "./layout/RecipesLayout";

//pages
import Home from "./pages/Home";
import Recipes, { recipesLoader } from "./pages/recipes/Recipes";
import RecipeError from "./pages/recipes/RecipeError";
import NotFound from "./pages/NotFound";
import RecipeDetail, {
  recipeDetailsLoader,
} from "./pages/recipes/RecipeDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />

      <Route path="recipes" element={<RecipesLayout />}>
        <Route
          index
          element={<Recipes />}
          loader={recipesLoader}
          errorElement={<RecipeError />}
        />
        <Route
          path=":id"
          element={<RecipeDetail />}
          loader={recipeDetailsLoader}
          errorElement={<RecipeError />}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
