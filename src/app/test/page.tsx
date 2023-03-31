import UsersList from './UsersList';
import Counter from './Counter'
import { Suspense } from 'react';

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>
      <Counter />
      <Suspense fallback={<p>ユーザデータ Loading...</p>}>
        {/* @ts-expect-error Server Component */}
        <UsersList />
      </Suspense>
    </>
  );
};

export default Test;