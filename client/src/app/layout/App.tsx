import {useEffect, useState} from "react";
import axios from "axios";
import {CssBaseline, Container} from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/ActivityDashboard";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [activities, setActivities] = useState<Activity[]>([]);  
  
  useEffect(() => {
      axios.get<Activity[]>(endpoint)
          .then(res => setActivities(res.data)); 
  }, []);
    
  return (
      <>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="xl" sx={{mt: 3}}>
            <ActivityDashboard activities={activities} />
          </Container>
      </>
  )
}

export default App
