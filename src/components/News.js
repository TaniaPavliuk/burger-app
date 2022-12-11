function Article() {
  return <div className="article-el">Article</div>;
}

function News() {
  return (
    <aside>
      <p>News</p>
      <Article />
      <Article />
      <Article />
    </aside>
  );
}

export default News;
