module.exports = {
  posts: [
    { id: 1, title: "lorem ipson", views: 123, user_id: 1 },
    { id: 2, title: "Hello world", views: 325, user_id: 3 },
    { id: 3, title: "FIFA world cup 2022", views: 234, user_id: 2 },
  ],
  users: [
    { id: 1, name: "Ronaldo", post_id: 3, branch_id: 1 },
    { id: 2, name: "Messi", post_id: 4, branch_id: 2 },
    { id: 3, name: "Neymar", post_id: 2, branch_id: 1 },
    { id: 4, name: "Mebappe", post_id: 2, branch_id: 2 },
  ],
  branches: [
    { id: 1, name: 'Navoiy brnach' },
    { id: 2, name: 'Toshkent branch' }
  ]
}

