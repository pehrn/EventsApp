import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';

export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right, #182a73, #218aae)'}}>
                    <Container maxWidth="xl">
                        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                <MenuItem sx={{display: 'flex', gap: 2}}>
                                    <Group fontSize="large" />
                                    <Typography variant="h4" fontWeight="bold">EventsApp</Typography>
                                </MenuItem>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                                    Events
                                </MenuItem>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                                    About
                                </MenuItem>
                                <MenuItem sx={{fontSize: '1.2rem', textTransform: 'uppercase', fontWeight: 'bold'}}>
                                    Contact
                                </MenuItem>
                            </Box>
                            <Button size="large" variant="contained" color="warning">Create Event</Button>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
}
