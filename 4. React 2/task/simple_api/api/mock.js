// Copyright (c) Not me

const normalizedCatalogs = [
  {
    id: 1,
    name: "Религия",
    books: [1, 2, 3],
  },
  {
    id: 2,
    name: "Художественная литература",
    books: [4, 5, 6],
  },
  {
    id: 3,
    name: "Манга",
    books: [7, 8, 9],
  },
];

const normalizedBooks = [
  {
    id: 1,
    title: "Библия С++",
    price: 899,
    quantity: 8,
    rating: 4.5,
    author: "Гвидо Ван Россум",
    genres: ["Ужасы"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 2,
    title: "Библия Linux",
    price: 1499,
    quantity: 4,
    rating: 4.9,
    author: "Билл Гейтс",
    genres: ["Комедия", "Советское"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 3,
    title: "Райский BrainFuck",
    price: 499,
    quantity: 1,
    rating: 3.2,
    author: "Рататуй",
    genres: ["Научное", "Для детей"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 4,
    title: "Я хз",
    price: 899,
    quantity: 8,
    rating: 4.5,
    author: "Паскаль",
    genres: ["вахвхахвхахвхахвха че за дичь"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 5,
    title: "Почему",
    price: 1499,
    quantity: 4,
    rating: 4.9,
    author: "Пашкин",
    genres: ["нет, не пушкин"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 6,
    title: "проаовлллл",
    price: 499,
    quantity: 1,
    rating: 3.2,
    author: "аноним",
    genres: ["Научное", "Для детей"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 7,
    title: "Берсерк",
    price: 24999,
    quantity: 340,
    rating: 5,
    author: "Кэнтуро Миура",
    genres: ["имба", "обязан прочитать"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 8,
    title: "Атака титанов",
    price: 15999,
    quantity: 245,
    rating: 5,
    author: "Хиджаме Исаяма",
    genres: ["шедевр", "обязан прочитать"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
  {
    id: 9,
    title: "Наруто",
    price: 13000,
    quantity: 133,
    rating: 4.7,
    author: "Кишимото",
    genres: ["Ну такое", "атака и берсерк лучше"],
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
    feedbacks: [
      {
        username: "user",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam expedita pariatur, consequatur corporis autem blanditiis aliquid perspiciatis eos ducimus nostrum mollitia earum, nam asperiores illo temporibus culpa ullam dolor officia doloremque tempora maxime obcaecati ut hic sit. Nesciunt porro minus cum praesentium dignissimos! Quaerat, alias asperiores. Deserunt provident nesciunt excepturi.",
        rating: 4.4,
      },
    ],
  },
];

module.exports = {
  catalogs: normalizedCatalogs,
  books: normalizedBooks,
};
