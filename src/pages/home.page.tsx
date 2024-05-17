import { Navbar } from '@/common/navbar';
import { Feed } from '@/entities/feed/postList/ui';
import { PostWriter } from '@/entities/feed/postWriter/ui';

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <PostWriter />
      <Feed />
    </>
  );
};
