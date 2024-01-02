import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import newsLop from "@/assets/sidetop.png"
import Grid  from '@mui/material/Grid';
import Image from 'next/image';

const LatesNews = () => {
    return (
        <Box className="md:px-12 my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={newsLop} width={800} alt='logo'></Image>
                    </CardMedia>
                    <CardContent>
                        <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-2'>
                            Nasir Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={newsLop} width={800} alt='logo'></Image>
                            </CardMedia>
                            <CardContent>
                                <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    Nasir Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={newsLop} width={800} alt='logo'></Image>
                            </CardMedia>
                            <CardContent>
                                <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    Nasir Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={newsLop} width={800} alt='logo'></Image>
                            </CardMedia>
                            <CardContent>
                                <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    Nasir Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardActionArea>
                            <CardMedia>
                                <Image src={newsLop} width={800} alt='logo'></Image>
                            </CardMedia>
                            <CardContent>
                                <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                                <Typography gutterBottom>
                                    Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                </Typography>
                                <Typography gutterBottom className='my-2'>
                                    Nasir Hossain - Mar 18 2023
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default LatesNews;