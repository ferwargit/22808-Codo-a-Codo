console.log("async-await");

const getNameAsync = async (idPost) => {
  try {
    // Me trae un montón de información del post, esta es la respuesta.
    const resPost = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${idPost}`
    );
    // console.log(resPost);
    // Ahora voy a guardar el json y aqui tengo el id del autor
    const post = await resPost.json();
    // console.log(post);
    // Ahora consulto userId
    const resUser = await fetch(
      `https://jsonplaceholder.typicode.com/users/${post.userId}`
    );
    const user = await resUser.json();
    console.log(user);

    console.log(
      `La persona que escribió el post ${idPost} es ${user.name} y vive en ${user.address.city}`
    );
  } catch (error) {
    console.log(error);
  }
};

getNameAsync(5);
