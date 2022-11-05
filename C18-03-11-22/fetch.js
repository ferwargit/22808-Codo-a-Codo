console.log("fetch");

const getNameFetch = (idPost) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    .then((res) => {
      return res.json();
    })
    .then((post) => {
      // console.log(post);
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then((res) => {
          return res.json();
        })
        .then((user) => {
          console.log(
            `La persona que escribió el post ${idPost} es ${user.name} y vive en ${user.address.city}`
          );
        });
    });
};

getNameFetch(8);
