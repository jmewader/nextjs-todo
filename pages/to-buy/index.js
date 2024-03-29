import { Grommet } from "grommet";
import MainLayout from "../../components/MainLayout";
import MainTodo from "../../components/Todo";

export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: 1,
          text: "Авокадо",
          isChecked: false,
        },
        {
          id: 2,
          text: "Черника",
          isChecked: false,
        },
        {
          id: 3,
          text: "Манго",
          isChecked: false,
        },
        {
          id: 4,
          text: "Куркума",
          isChecked: false,
        },
        {
          id: 5,
          text: "Молоко",
          isChecked: false,
        },
        {
          id: 6,
          text: "Петрушка",
          isChecked: false,
        },
      ],
      title: "Products",
    },
  };
}

const ProductsList = ({ products }) => {
  return (
    <Grommet>
      <MainLayout>
        <MainTodo todoListStatic={products} />
      </MainLayout>
    </Grommet>
  );
};

export default ProductsList;
