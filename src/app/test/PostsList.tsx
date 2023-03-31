type Post = {
  id: number;
  title: string;
}

const getPosts = async() => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await
  fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok) throw new Error('Something went wrong');
  const posts: Post[] = await response.json();
  console.log(posts) //サーバ側で処理が行われてるかチェック
  return posts;
}

const PostList = async() => {
  const posts = await getPosts();
  return(
    <>
      <h2>記事一覧</h2>
      <ul>
        {posts && posts.map((post) => <li key={post.id}>{post.title}</li>)}
      </ul>
    </>
  )
}

export default PostList;