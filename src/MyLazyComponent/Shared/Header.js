import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImg from "@/assets/logo1.png"
import { getCurrentDate } from "@/utils/getCurrentDate";
const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="my-4">
            <Container>
                <Image src={headerImg} width={500} height={500} alt="logo" className="mx-auto" />
                <Typography variant='body2' color="gray" textAlign="center" className="my-2">Journalism Without Fear or Favour</Typography>
                <Typography textAlign="center">{currentDate}</Typography>
            </Container>
        </Box>
    );
};
export default Header;