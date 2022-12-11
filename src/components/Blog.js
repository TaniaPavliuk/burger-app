function Post() {
  return <div className="post-el">Post</div>;
}

function Blog() {
  return (
    <main>
      <p>Blog</p>
      <Post />
      <Post />
      <Post />
      <Post />
    </main>
  );
}

export default Blog;
