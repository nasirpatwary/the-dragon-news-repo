import { Box, Button, Container, IconButton, Typography } from '@mui/material';
// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: "/"
        },
        {
            route: "Pages",
            pathname: "/pages"
        },
        {
            route: "Category",
            pathname: "/categoy"
        },
        {
            route: "News",
            pathname: "/news"
        },
        {
            route: "Post",
            pathname: "/post"
        },
        {
            route: "Contact",
            pathname: "/contact"
        }
    ];
    return (
        <Marquee onCycleComplete={true} speed={200}>
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box className="w-full text-center" direction="row" sx={{
                    "& svg": {
                        color: "white"
                    }
                }} >
                    <IconButton>
                        <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon></TwitterIcon>
                    </IconButton>
                    <IconButton>
                        <YouTubeIcon></YouTubeIcon>
                    </IconButton>
                    <IconButton>
                        <LinkedInIcon></LinkedInIcon>
                    </IconButton>
                    <IconButton>
                        <InstagramIcon></InstagramIcon>
                    </IconButton>
                    <Box className="w-full text-center">
                        {navItems.map((item) => (
                            <Link key={item} href={item.pathname}>
                                <Button className="text-white">
                                    {
                                        item.route
                                    }
                                </Button>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Typography variant='body2' color="gray" textAlign={"center"}>@2023 Dragon News: Design by Programming Hero Welcome Nasir Hossin</Typography>
            </Container>
        </Box>
        </Marquee>
    );
};

export default Footer;