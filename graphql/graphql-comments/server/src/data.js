const users = [
  {
    id: "1",
    fullName: "Cihan Alıcı",
    profile_photo: 'https://randomuser.me/api/portraits/men/57.jpg',
    age: 25,
  },
  {
    id: "2",
    fullName: "Umut Bozbek",
    profile_photo: "https://randomuser.me/api/portraits/women/68.jpg",
    age: 29,
  },
];

const posts = [
  {
    id: "1",
    title: "Cihan'ın gönderisi",
    description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.",
    short_description: "Lorem Ipsum biraz da picsum",
    user_id: "1",
    cover: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: "2",
    title: "Cihan'ın diğer gönderisi",
    description: "Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.",
    short_description: "Lorem Ipsum biraz da picsum",
    user_id: "1",
    cover: 'https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
  },
  {
    id: "3",
    title: "Umut'un gönderisi",
    description: "lorem ducks ipsum dolor sit amet sportifs ipsum dolor sit amet",
    short_description: "Lorem Ipsum biraz da picsum",
    user_id: "2",
    cover: 'https://images.unsplash.com/photo-1656877280239-e94807c536cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
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
