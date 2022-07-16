import { Header, Box, Main } from "grommet";
import MainLayout from "../../components/MainLayout";
import MainTodo from "../../components/Todo";

export async function getStaticProps() {
  return {
    props: {
      products: [
        {
          id: 1,
          text: "Авокадо",
        },
        {
          id: 2,
          text: "Черника",
        },
        {
          id: 3,
          text: "Манго",
        },
      ],
      title: "Products",
    },
  };
}

const ProductsList = ({ products }) => {
  return (
    <MainLayout>
      <MainTodo todoListStatic={products} />
    </MainLayout>
  );
};

export default ProductsList;
