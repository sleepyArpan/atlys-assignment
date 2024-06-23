import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Login, NotFound } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

function App() {
  return (
    <main className='bg-black'>
      <div className='mx-6 my-0 flex min-h-screen flex-col bg-pale text-xl text-dark lg:mx-auto lg:my-0 lg:max-w-4xl lg:text-lg'>
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
