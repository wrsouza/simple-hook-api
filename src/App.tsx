import { FC, useCallback, useEffect } from 'react'
import usePosts from './hooks/usePosts';

const App: FC = () => {
  const { posts, getPosts } = usePosts();

  const getList = useCallback(async () => {
    await getPosts()
  }, [getPosts])

  useEffect(() => {
    getList()
  }, [getList])

  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
