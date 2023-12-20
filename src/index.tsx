import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { FirstPage } from './pages/FirstPage';
import TodoApp from './pages/TodoApp';
import SecondPage from './pages/SecondPage';
import Navigation from './components/Navigation';
import ThirdPage from "./pages/ThirdPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <FirstPage/> <TodoApp/></div>
  },
  {
    path: "/SecondPage",
    element: <div> <Navigation /> <SecondPage /> </div>
  },
  {
    path: "/ThirdPage",
    element: <div> <Navigation /> <ThirdPage/> </div>
  },
]);



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
     <RouterProvider router={router} />
  
);

