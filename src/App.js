import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./component/Blog/Blog";
import CssQuiz from "./component/CssQuiz/CssQuiz";
import Gits from "./component/Gits/Gits";
import Javascripts from "./component/Javascripts/Javascripts";
import Main from "./component/Main/Main";
import Reacts from "./component/Reacts/Reacts";
import Statistics from "./component/Statistics/Statistics";
import TopicDetails from "./component/TopicDetails/TopicDetails";
import Topics from "./component/Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Topics></Topics>,
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
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
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
