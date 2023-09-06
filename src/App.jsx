import Main from "./components/Main";
import Home from "./features/home/Home";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import Projects from "./features/projects/Projects";
import Articles, {
  loader as ArticlesLoader,
} from "./features/articles/Articles";
import Github, { loader as GithubLoader } from "./features/github/Github";
import Settings from "./features/settings/Settings";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import ErrorPage from "./features/error/ErrorPage";

const router = createBrowserRouter([
  {
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/articles",
        element: <Articles />,
        loader: ArticlesLoader,
      },
      {
        path: "/github",
        element: <Github />,
        loader: GithubLoader,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
