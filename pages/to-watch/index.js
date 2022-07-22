import MainLayout from "../../components/MainLayout";
import MainTodo from "../../components/Todo";

export async function getStaticProps() {
  return {
    props: {
      movies: [
        {
          id: 1,
          text: "Игра Джеральда",
          isChecked: false,
        },
        {
          id: 2,
          text: "Век Адалин",
          isChecked: false,
        },
        {
          id: 3,
          text: "Толкин",
          isChecked: false,
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
