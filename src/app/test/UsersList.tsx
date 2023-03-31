type User = {
  id: number;
  name: string;
  email: string;
}

const getUsers = async() => {
  const response = await
  fetch('https://jsonplaceholder.typicode.com/users');
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