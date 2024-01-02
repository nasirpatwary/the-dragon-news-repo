'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton } from '@mui/material';
import Stack from '@mui/material/Stack';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Link from 'next/link';
import Header from './Header';
import Marquee from 'react-fast-marquee';

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
    pathname: "/categories/news?category=all-news"
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

function Navbar() {
  return (
    <>
      <Header></Header>
    <Marquee onCycleComplete={true} speed={100}>
        <AppBar position="static bg-black">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={100} height={100} alt='logo'></Image>
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
          <Box>
            <Stack direction="row" sx={{
              "& svg":{
                color:"white"
              }
            }}>
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Marquee>
    </>
  );
}
export default Navbar;