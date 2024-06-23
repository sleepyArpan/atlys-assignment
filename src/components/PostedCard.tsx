import Card from './Card';
import chatIcon from '../assets/chat-icon.svg';
import hamburgerIcon from '../assets/hamburger-icon.svg';

interface PostedCardProps {
  className?: string;
  user: { name: string; profilePic: string };
  post: {
    content: string;
    timePosted: string;
    commentsNumber: number;
    emoji: string;
  };
}

export default function PostedCard({
  className = '',
  user,
  post,
}: PostedCardProps) {
  return (
    <Card className={`my-4 ${className}`}>
      <div className='flex justify-between items-center mb-5'>
        <div className='flex justify-center items-center'>
          <img
            className='w-11 h-11 rounded-full mr-4 object-cover'
            src={user.profilePic}
          />
          <div className='flex flex-col'>
            <span className='text-gray-300 font-medium mb-1'>{user.name}</span>
            <span className='text-gray-400 font-medium mb-1 text-sm'>
              {post.timePosted}
            </span>
          </div>
        </div>
        <img src={hamburgerIcon} alt='expand' className='w-5 h-5' />
      </div>
      <div className='p-4 bg-black rounded-lg flex'>
        <div className='flex-shrink-0 w-12 h-12 rounded-full bg-gray-500 flex justify-center items-center mr-3'>
          <span role='img' aria-label='chat'>
            {post.emoji}
          </span>
        </div>
        <span className='text-gray-400'>{post.content}</span>
      </div>
      <div className='flex mt-4'>
        <img src={chatIcon} alt='Comments' className='w-5 h-5 mr-2' />
        <span className='text-gray-400 text-sm'>
          {post.commentsNumber} comments
        </span>
      </div>
    </Card>
  );
}
