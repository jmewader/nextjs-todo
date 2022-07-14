import { Grommet, Main } from "grommet";

/*COMPONENTS*/
import MainSidebar from "../components/sidebar";
import MainTodo from "../components/Todo";

export default function Home() {
  return (
    <Grommet>
      <Main flex width="xxlarge" height="xxlarge" direction="row">
        <MainSidebar />
        <MainTodo />
      </Main>
    </Grommet>
  );
}
