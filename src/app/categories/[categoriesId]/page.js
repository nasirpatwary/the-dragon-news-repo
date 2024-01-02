import { getCategoryNews } from '@/utils/getCategoryNews';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const DynamicNewPage = async ({ params, searchParams }) => {
    // console.log(searchParams);
    const { data } = await getCategoryNews(searchParams.category)
    // console.log(data);
    return (
        <div className='my-5'>
            <h2 >Total <i><strong>{searchParams.category}</strong></i> news: {data.length}</h2>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => (<Grid key={news.id} item xs={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia>
                                    <Image src={news.thumbnail_url} width={800} height={800} alt='logo'></Image>
                                </CardMedia>
                                <CardContent>
                                    <p className='w-[114px] text-center bg-[#FF0000] my-4 text-white rounded p-1'>{news.category}</p>
                                    <Typography gutterBottom>
                                       {news.title}
                                    </Typography>
                                    <Typography gutterBottom className='my-2'>
                                        {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.details}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default DynamicNewPage;