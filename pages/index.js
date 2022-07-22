import { Grommet } from "grommet";

/*COMPONENTS*/
import MainTodo from "../components/Todo";
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <Grommet>
      <MainLayout> 
        <MainTodo />
      </MainLayout>
    </Grommet>
  );
}
