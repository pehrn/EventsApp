import {useEffect, useState} from "react";
import axios from "axios";
import {List, ListItem, ListItemText, CssBaseline, Container} from "@mui/material";
import NavBar from "./NavBar";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [activities, setActivities] = useState<Activity[]>([]);  
  
  useEffect(() => {
      axios.get<Activity>(endpoint)
          .then(res => setActivities(res.data)); 
  }, []);
    
  return (
      <>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="xl" sx={{mt: 3}}>
              <List>
                  {activities.map((activity) => (
                      <ListItem key={activity.id}>
                          <ListItemText>{activity.title}</ListItemText>
                      </ListItem>
                  ))}
              </List>
          </Container>
      </>
  )
}

export default App
