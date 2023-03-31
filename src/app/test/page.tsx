import UsersList from './UsersList';
import Counter from './Counter'

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>
      <Counter />
      {/* @ts-expect-error Server Component */}
      <UsersList />
    </>
  );
};

export default Test;