const users = [
  {
    id: "1",
    fullName: "Cihan Alıcı",
    age: 25,
  },
  {
    id: "2",
    fullName: "Umut Bozbek",
    age: 29,
  },
];

const posts = [
  {
    id: "1",
    title: "Cihan'ın gönderisi",
    user_id: "1",
  },
  {
    id: "2",
    title: "Cihan'ın diğer gönderisi",
    user_id: "1",
  },
  {
    id: "3",
    title: "Umut'un gönderisi",
    user_id: "2",
  },
];

const comments = [
  {
    id: "1",
    text: "Bu umutun yorumudur",
    post_id: "1",
    user_id: "2"
  },
  {
    id: "2",
    text: "Bu cihanın yorumudur",
    post_id: "1",
    user_id: "1"
  },
  {
    id: "3",
    text: "foo bar",
    post_id: "2",
    user_id: "2"
  },
  {
    id: "4",
    text: "foo bar baz",
    post_id: "3",
    user_id: "1"
  },
];

export default {
  users, 
  posts, 
  comments
}
