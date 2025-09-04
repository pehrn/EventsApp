import {useEffect, useState} from "react";
import axios from "axios";
import {CssBaseline, Container, Box} from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [activities, setActivities] = useState<Activity[]>([]);  
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  
  useEffect(() => {
      axios.get<Activity[]>(endpoint)
          .then(res => setActivities(res.data)); 
  }, []);
  
  const handleSelectActivity = (id: string) => {
      setSelectedActivity(activities.find(activity => activity.id === id));
  }
  
  const handleCancelSelectActivity = () => {
      setSelectedActivity(undefined);
  }
    
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
          <CssBaseline />
          <NavBar />
          <Container maxWidth="xl" sx={{mt: 3}}>
            <ActivityDashboard 
                activities={activities} 
                selectActivity={handleSelectActivity} 
                cancelSelectActivity={handleCancelSelectActivity}
                selectedActivity={selectedActivity} />
          </Container>
      </Box>
  )
}

export default App
