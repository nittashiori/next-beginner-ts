import UsersList from './UsersList';
import PostsList from './PostsList';
import Counter from './Counter'
import { Suspense } from 'react';

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>
      <Counter />
      <Suspense fallback={<p>ユーザ/記事データ Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <UsersList />
        {/* @ts-expect-error Server Component */}
        <PostsList />
      </Suspense>
    </>
  );
};

export default Test;