import { Grommet } from "grommet";

/*COMPONENTS*/
import MainTodo from "../components/Todo";
import MainLayout from "../components/MainLayout";
import Meta from "../components/utils/Meta";

export default function Home() {
  return (
    <Grommet>
      <Meta title="Todo" descriptions="Описание страницы" />
      <MainLayout> 
        <MainTodo />
      </MainLayout>
    </Grommet>
  );
}
