import UsersList from './UsersList';

const Test = () => {
  return (
    <>
      <h1>Testページ</h1>
      {/* @ts-expect-error Server Component */}
      <UsersList />
    </>
  );
};

export default Test;