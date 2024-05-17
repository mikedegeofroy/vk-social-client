import { Navbar } from '@/common/navbar';
import { Feed } from '@/entities/feed/postList/ui';
import { User } from '@/entities/user';

export const UserPage = () => {
  return (
    <>
      <Navbar />
      <User />
      <Feed />
    </>
  );
};
