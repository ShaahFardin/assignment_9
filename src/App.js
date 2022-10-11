import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Main from "./component/Main/Main";
import Statistics from "./component/Statistics/Statistics";
import TopicDetails from "./component/TopicDetails/TopicDetails";
import Topics from "./component/Topics/Topics";
import Error from "./component/Error/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/home",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Statistics></Statistics>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/api/quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },

          element: <TopicDetails></TopicDetails>,
        },
        {
          path: "*",
          element: <Error></Error>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
