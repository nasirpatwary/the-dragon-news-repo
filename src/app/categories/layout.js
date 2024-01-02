import CategoryList from "@/MyLazyComponent/ui/CategoryList/CategoryList";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid  from "@mui/material/Grid";


const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
            <Grid container spacing={2}>
        <Grid item xs={3}>
          <CategoryList></CategoryList>
        </Grid>
        <Grid item xs={9}>
        {children}
        </Grid>
      </Grid>
            </Container>
        </Box>
    );
};

export default CategoriesLayout;