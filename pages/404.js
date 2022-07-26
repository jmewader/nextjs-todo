import { Box, Paragraph } from "grommet";
import MainLayout from "../components/MainLayout";

const notFound = () => {
  return (
    <MainLayout>
      <Box align="center" justify="center" pad="medium" width="100%">
        <Paragraph > Такой страницы не существует...</Paragraph>
      </Box>
    </MainLayout>
  );
};

export default notFound;
