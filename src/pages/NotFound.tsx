import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='flex items-center justify-center h-screen bg-black text-white'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold mb-4'>404</h1>
        <p className='text-2xl mb-8'>Page Not Found</p>
        <Link to='/' className='text-blue hover:underline'>
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
