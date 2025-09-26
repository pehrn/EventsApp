import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
import MenuItemLink from "../shared/components/MenuItemLink";

export default function NavBar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right, #182a73, #218aae)'}}>
                    <Container maxWidth="xl">
                        <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                            <Box>
                                <MenuItemLink to='/'>
                                    <Group fontSize="large" />
                                    <Typography variant="h4" fontWeight="bold">EventsApp</Typography>
                                </MenuItemLink>
                            </Box>
                            <Box sx={{display: 'flex'}}>
                                <MenuItemLink to='/activities'>
                                    Events
                                </MenuItemLink>
                                <MenuItemLink to='/createActivity'>
                                    Create Activity
                                </MenuItemLink>
                            </Box>
                            <MenuItem>
                                User menu ToDo
                            </MenuItem>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </>
    );
}
