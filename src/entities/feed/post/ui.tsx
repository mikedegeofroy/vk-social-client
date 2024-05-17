import { Avatar, AvatarFallback, AvatarImage } from '@/common/ui/avatar';


export const Post = () => {
  return (
    <div className='bg-white rounded-md shadow-md overflow-hidden'>
      <div className='flex items-center p-4 border-b'>
        <Avatar className='w-8 h-8 mr-3'>
          <AvatarImage alt='@jaredpalmer' src='/placeholder-avatar.jpg' />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div>
          <div className='font-medium'>Jared Palmer</div>
          <div className='text-gray-500 text-sm'>2h ago</div>
        </div>
      </div>
      <div className='p-4'>
        <p>
          Excited to share my latest project with you all! Check it out and let
          me know what you think.
        </p>
      </div>
    </div>
  );
};
