import {useEffect, useState} from "react";
import {Typography, List, ListItem, ListItemText} from "@mui/material";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [activities, setActivities] = useState<Activity[]>([]);  
  
  useEffect(() => {
      fetch(endpoint)
          .then(res => res.json())
          .then(data => setActivities(data)); 
  }, []);
    
  return (
      <>
          <Typography variant='h3'>EventsApp</Typography>
          <List>
              {activities.map((activity) => (
                  <ListItem key={activity.id}>
                      <ListItemText>{activity.title}</ListItemText>
                  </ListItem>
              ))}
          </List>
      </>
  )
}

export default App
