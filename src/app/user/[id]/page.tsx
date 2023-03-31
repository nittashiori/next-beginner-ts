import { notFound } from 'next/navigation'

type Props = {
  params: { id: string }
}

type User = {
  id: number;
  name: string;
  email: string;
}

const getUser = async(id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: User = await response.json();
  return user;
}

const User = async({ params: { id } }: Props) => {
  const user = await getUser(id);
  if(!user.id) {
    notFound();
  }
  return (
    <div>
      <h1>User詳細ページ { id }</h1>
      <div>
        <div>名前： {user.name}</div>
        <div>メールアドレス： {user.email}</div>
      </div>
    </div>
  )
}

export default User;