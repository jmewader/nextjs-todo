import { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import MainTodo from "../../components/Todo";

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       movies: [
//         {
//           id: 1,
//           text: "Игра Джеральда",
//           isChecked: false,
//         },
//         {
//           id: 2,
//           text: "Век Адалин",
//           isChecked: false,
//         },
//         {
//           id: 3,
//           text: "Толкин",
//           isChecked: false,
//         },
//         {
//           id: 4,
//           text: "Мгла",
//           isChecked: false,
//         },
//         {
//           id: 5,
//           text: "Пролетая над гнездом кукушки",
//           isChecked: false,
//         },
//         {
//           id: 6,
//           text: "Бегущий по лезвию",
//           isChecked: false,
//         },
//         {
//           id: 7,
//           text: "Сияние",
//           isChecked: false,
//         },
//       ],
//       title: "Movies",
//     },
//   };
// }

const Movies = ({ todos }) => {

  return (
    <MainLayout>
      <MainTodo todoListStatic={todos} />
    </MainLayout>
  );
};

export async function getServerSideProps(context) {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      todos: data.slice(0, 20),
      title: "Todos",
    },
  };
}

export default Movies;
