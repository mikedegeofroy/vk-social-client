import { Button } from '@/common/ui/button';
import { Textarea } from '@/common/ui/textarea';

export const PostWriter = () => {
  return (
    <div className='bg-white rounded-md shadow-md overflow-hidden mb-10 p-4 gap-5 flex flex-col'>
      <h1 className='text-2xl font-semibold'>Hey, what's new?</h1>
      <Textarea className='focus-visible:ring-0' rows={4}></Textarea>
      <Button>Share</Button>
    </div>
  );
};
