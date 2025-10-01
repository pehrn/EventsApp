import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container, LinearProgress, MenuItem } from '@mui/material';
import { Group } from '@mui/icons-material';
import MenuItemLink from "../shared/components/MenuItemLink";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";

export default function NavBar() {
    
    const {uiStore} = useStore();
    
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{backgroundImage: 'linear-gradient(to right, #182a73, #218aae)', position: 'relative'}}>
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
                                <MenuItemLink to='/counter'>
                                    Counter
                                </MenuItemLink>
                            </Box>
                            <MenuItem>
                                User menu ToDo
                            </MenuItem>
                        </Toolbar>
                    </Container>
                    <Observer>
                        {() => uiStore.isLoading ? (
                            <LinearProgress color='secondary' sx={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 4}} />
                        ) : null}   
                    </Observer>
                </AppBar>
            </Box>
        </>
    );
}
