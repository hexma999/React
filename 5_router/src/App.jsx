import Root from "./pages/Root";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:videoId", element: <VideoDetail /> },
    ],
  },
  {
    path: "/videos",
    element: <Videos />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
