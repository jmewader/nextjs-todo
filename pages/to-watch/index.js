import { Header, Box, Main } from "grommet";
import MainLayout from "../../components/MainLayout";
import MainTodo from "../../components/Todo";

export async function getStaticProps() {
  return {
    props: {
      movies: [
        {
          id: 1,
          text: "Игра Джеральда",
        },
        {
          id: 2,
          text: "Век Адалин",
        },
        {
          id: 3,
          text: "Толкин",
        },
      ],
      title: "Movies",
    },
  };
}

const Movies = ({ movies }) => {
  return (
    <MainLayout>
      <MainTodo todoListStatic={movies} />
    </MainLayout>
  );
};

export default Movies;
