import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconPerson2 from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button/Button';
import FormControl from '@mui/material/FormControl';


export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='transparent'>
        <Toolbar className='flex justify-between'>
          <div className="flex justify-center">
            <img src='assets/img/gallery/logo.svg' alt='logo' className='max-w-max'></img>
            <Typography className='font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-red-600 to-orange-400 p-2' variant='h6'>
              FoodwaGon
            </Typography>
          </div>
          <div className="md:flex hidden " >
            <FormControl variant="standard">
              <Input
                placeholder='Search Food'
                disableUnderline
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon className=' text-orange-500 no-underline' />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button startIcon={<IconPerson2 sx={{ width: "25px", height: "25px" }} />} className='text-orange-400'
              sx={{
                borderColor: "gray",
                borderWidth: "2px",
                color: "orange",
                boxShadow: "2,10,#888888;",
                "&:hover":{backgroundColor:"gray"}
              }}
            >Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}