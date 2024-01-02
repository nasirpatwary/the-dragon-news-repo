import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Image from 'next/image';
import sideBarImg from "@/assets/sidebar.png"
// second time
import Grid from '@mui/material/Grid';
import  Divider  from '@mui/material/Divider';

const Sidebar = () => {
    return (
        <Box className="px-10 my-5">
            <Card>
                <CardActionArea>
                    <CardMedia>
                        <Image src={sideBarImg} alt='logo' />
                    </CardMedia>
                    <CardContent>
                        <p className='w-[94px] bg-[#FF0000] my-4 text-white rounded p-1'>Technology</p>
                        <Typography gutterBottom>
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-2'>
                            Nasir Hossain - Mar 18 2023
                        </Typography>
                        <Typography variant="body2 " color="text.secondary">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout........
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Box className="my-8">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2 }}>
                    <Grid>
                        <Box className="flex ml-4 gap-4">
                            <Image className='w-20 h-16' src={sideBarImg} alt="logo" />
                            <Box className="w-full">
                                <Typography>Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </Typography>
                                <p>Mar 18 2023</p>
                                <Divider></Divider>
                            </Box>
                        </Box>
                        <Box className="flex ml-4 gap-4">
                            <Image className='w-20 h-16' src={sideBarImg} alt="logo" />
                            <Box className="w-full">
                                <Typography >Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </Typography>
                                <p>Mar 18 2023</p>
                                <Divider></Divider>
                            </Box>
                        </Box>
                        <Box className="flex ml-4 gap-4">
                            <Image className='w-20 h-16' src={sideBarImg} alt="logo" />
                            <Box className="w-full">
                                <Typography >Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </Typography>
                                <p>Mar 18 1623</p>
                                <Divider></Divider>
                            </Box>
                        </Box>
                        <Box className="flex ml-4 gap-4">
                            <Image className='w-20 h-16' src={sideBarImg} alt="logo" />
                            <Box className="w-full">
                                <Typography >Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </Typography>
                                <p>Mar 18 2023</p>
                                <Divider></Divider>
                            </Box>
                        </Box>
                        <Box className="flex ml-4 gap-4">
                            <Image className='w-20 h-16' src={sideBarImg} alt="logo" />
                            <Box className="w-full">
                                <Typography >Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it </Typography>
                                <p>Mar 18 2023</p>
                                <Divider></Divider>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Sidebar;