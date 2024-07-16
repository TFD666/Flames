import { Box, Stack, Typography } from '@mui/material';



const HeroBanner = () => {
return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#000000" fontWeight="600" fontSize="26px" style={{borderBottom: '3px solid #FFD700'}}>Fitness With AI</Typography>
    <Typography color= "#000000" fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="30px" mt="30px">
    Revolutionize, <br/>
    Unleash <br />
    And Elevate
    </Typography>
    <Typography color="#000000"fontSize="22px" fontFamily="Alegreya" >
    Embrace the fusion of fitness<br/>
    and AI – where determination meets<br/>
    innovation, and transformation becomes limitless
    </Typography>
    <img src={process.env.PUBLIC_URL + '/HeroBannerimage.jpeg'} alt="hero-banner"  className="hero-banner-img"/>
</Box>

  )
}

export default HeroBanner;