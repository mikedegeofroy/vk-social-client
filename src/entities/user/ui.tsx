import { Avatar, AvatarFallback, AvatarImage } from '@/common/ui/avatar';

export const User = () => {
  return (
    <div className='pr-5 flex'>
      <Avatar className='w-20 h-20 mr-3'>
        <AvatarImage alt='@jaredpalmer' src='/placeholder-avatar.jpg' />
        <AvatarFallback className='text-3xl'>JP</AvatarFallback>
      </Avatar>
      <div>
        <h1 className='text-2xl'>Jared Palmer</h1>
        <h1 className='text-md text-foreground-muted'>@jaredpalmer</h1>
      </div>
    </div>
  );
};
