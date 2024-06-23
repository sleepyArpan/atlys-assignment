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
    <main className='bg-black h-screen w-screen'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
