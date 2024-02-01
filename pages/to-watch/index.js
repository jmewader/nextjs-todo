import { Grommet } from "grommet";
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
        {
          id: 4,
          text: "Мгла",
          isChecked: false,
        },
        {
          id: 5,
          text: "Пролетая над гнездом кукушки",
          isChecked: false,
        },
        {
          id: 6,
          text: "Бегущий по лезвию",
          isChecked: false,
        },
        {
          id: 7,
          text: "Сияние",
          isChecked: false,
        },
      ],
      title: "Movies",
    },
  };
}

const MoviesList = ({ movies }) => {
  return (
    <Grommet>
      <MainLayout>
        <MainTodo todoListStatic={movies} />
      </MainLayout>
    </Grommet>
  );
};

export default MoviesList;
