import {Link} from 'react-router-dom';
import{Stack} from '@mui/material';
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={process.env.PUBLIC_URL + '/Logo.jpg'} alt="Logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#000000', borderBottom: '3px solid #FFD700' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#000000' }}>Exercises</a>
    </Stack>
  </Stack>
  )
}

export default Navbar;