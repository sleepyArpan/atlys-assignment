import { Button, Card, PostedCard } from '../components';
import data from '../data';

export default function Home() {
  return (
    <>
      <h1 className='mt-10 text-gray-300 text-2xl font-medium'>Hello Jane</h1>
      <p className='mt-3 text-gray-400 mb-10'>
        How are you doing today? Would you like to share something with the
        community{' '}
        <span role='img' aria-label='person hugging'>
          🤗
        </span>
      </p>
      <Card>
        <span className='text-gray-300 font-medium text-lg mb-4'>
          Create Post
        </span>
        <div className='p-4 bg-black rounded-lg flex'>
          <div className='w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center mr-3'>
            <span role='img' aria-label='chat'>
              💬
            </span>
          </div>
          <input
            className='w-full h-10 border-hidden bg-black text-white'
            placeholder='How are you feeling today?'
          />
        </div>
        <Button className='mt-4 w-28 ml-auto'>Post</Button>
      </Card>
      {data.map(postDetails => (
        <PostedCard
          post={postDetails.post}
          user={postDetails.user}
          key={postDetails.user.id}
        />
      ))}
    </>
  );
}
