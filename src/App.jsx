import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Header from './componets/Header';
import Footer from './componets/Footer';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import HowtoDo from './pages/HowtoDo';
import Testimonials from './pages/Testimonials';
import Form from './componets/Form';

function App() {
  const Layout = () => {
    return (
      <div className='m-0 p-0 bg-[#DCF2F1] select-none min-h-screen ' id='home'>
        <div className='sticky top-0 z-50' >
        <Header />
        </div>

        <div className="flex-grow overflow-hidden">
          <Outlet />
          <HowtoDo/>
          <Form/>
          <Testimonials/>
        </div>
        <div className='block'>

          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <HomePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
