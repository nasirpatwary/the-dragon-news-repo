import LatesNews from '@/MyLazyComponent/ui/LatesNews/LatesNews';
import Sidebar from '@/MyLazyComponent/ui/Sidebar/Sidebar';
import Grid from '@mui/material/Grid';
const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatesNews></LatesNews>
        </Grid>
        <Grid item xs={4}>
        <Sidebar></Sidebar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;