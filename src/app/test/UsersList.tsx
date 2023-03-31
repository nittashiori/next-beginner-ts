type User = {
  id: number;
  name: string;
  email: string;
}

const getUsers = async() => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await
  fetch('https://jsonplaceholder.typicode.com/user');
  if(!response.ok) throw new Error('Something went wrong');
  const users: User[] = await response.json();
  console.log(users) //サーバ側で処理が行われてるかチェック
  return users;
}

const UserList = async() => {
  const users = await getUsers();
  return(
    <>
      <h2>ユーザー一覧</h2>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UserList;