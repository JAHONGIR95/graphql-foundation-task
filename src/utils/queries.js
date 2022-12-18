export const getAllPosts = `
  query getPosts {
    allPosts {
      id
      title
      views
      User {
        name
        Branch {
          name
        }
      }
    }
  }
`

export const getPosts = `
  query getPosts($page: Int, $perPage: Int) {
    allPosts(page: $page, perPage: $perPage){
      id,
      title,
      views,
      Users{
        id,
        name,
        Branch{
          id,
          name
        }
      }
    }
  }
`

export const onlyPosts = `
  query getPosts {
    allPosts {
      id,
      title,
      views
    }
  }
`

export const usersData = `
  query getUsers {
    allUsers{
      id,
      name,
      Branch{
        name
      }
    }
  }
`

export const singlePost = `
query getSinglePost($id: ID!) {
  Post(id: $id){
   id,
   title,
   views,
   User{
      id,
     name,
     Branch{
       name
     }
   }
 }
}
`

export const updatePost = `
  mutation updatePost($id: ID!, $title: String, $views: Int, $user_id: ID) {
    updatePost(id: $id, title: $title, views: $views, user_id: $user_id){
      id,
      title,
      views,
      user_id
    }
  }
`

export const updatePosts = `
  mutation updatePost($id: ID!, $title: String, $views: Int) {
    updatePost(id: $id, title: $title, views: $views){
      id,
      title,
      views
    }
  }
`

export const usersList = `
  query getUsersList {
    allUsers {
      id,
      name
    }
  }
`

export const createPost = `
  mutation createPost($title: String!, $views: Int!, $user_id: ID!) {
    createPost(title: $title, views: $views, user_id: $user_id){
      id,
      title,
    }
  }
`
