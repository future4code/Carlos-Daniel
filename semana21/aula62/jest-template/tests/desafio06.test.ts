//Exercício 06
// import { connection } from "../src/index";

// test("Create Post", async () => {
//   const post = {
//     id: "123",
//     title: "teste",
//     content: "blablabla",
//   };

//   await connection.createPost(post);
//   const postFromDb = await getPostById(post.id);

//   expect(postFromDb).not.toBe(undefined);
//   expect(postFromDb).toEqual({
//     id: "123",
//     title: "teste",
//     content: "blablabla",
//   });

//   afterAll(async () => {
//     await deletePostById("postId");
//     await destroyConnection();
//   });
// });
