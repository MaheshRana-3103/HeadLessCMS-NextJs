import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import SingleBlog from './components/SingleBlog/index.jsx';
import Blogs from './components/Blogs/index.jsx';
import Home from './components/Home/index.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/blog",
    element:<Blogs/>
  },
  {
    path:"/blog/:blogid",
    element: <SingleBlog/>
  }
])

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client = {queryClient}>
  <React.StrictMode>
    <Home/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  </QueryClientProvider>
)
