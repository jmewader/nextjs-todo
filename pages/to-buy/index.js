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
