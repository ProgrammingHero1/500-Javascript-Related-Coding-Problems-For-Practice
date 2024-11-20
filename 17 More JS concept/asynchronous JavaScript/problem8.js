async function fetchParallel() {
  const urls = [
    "https://jsonplaceholder.typicode.com/posts/1",
    "https://jsonplaceholder.typicode.com/posts/2",
  ];

  const promises = urls.map((url) =>
    fetch(url).then((response) => response.json())
  );
  const results = await Promise.all(promises);

  results.forEach((post, index) => {
    console.log(`Post ${index + 1}: ${post.title}`);
  });
}

fetchParallel();
