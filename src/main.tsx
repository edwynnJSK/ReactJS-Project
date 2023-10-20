import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './Pages/Login/Login.tsx'
import { Dashboard } from './Pages/Dashboard/Dashboard.tsx'
import { ErrorWindow } from './Pages/Error/Error.tsx'
import { Register } from './Pages/Register/Register.tsx'
import App from './App.tsx'

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorWindow></ErrorWindow>
  },
  {
    path: "/",
    element:
      <>
      <App></App>
      </>
      ,
    errorElement: <ErrorWindow></ErrorWindow>
  },
  {
    path: "/login",
    element: 
      <>
        <Login />
      </>,
    errorElement: <ErrorWindow></ErrorWindow>
  },
  {
    path: "/register",
    element: 
      <>
      <Register></Register>
      </>,
    errorElement: <ErrorWindow></ErrorWindow>
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
