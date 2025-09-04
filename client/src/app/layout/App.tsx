import {useEffect, useState} from "react";
import axios from "axios";
import {CssBaseline, Container, Box} from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [activities, setActivities] = useState<Activity[]>([]);  
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
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
  
  const handleOpenForm = (id?: string) => {
      if (id) handleSelectActivity(id);
      else handleCancelSelectActivity();
      setEditMode(true);
  }
  
  const handleFormClose = () => {
      setEditMode(false);
  }
    
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
          <CssBaseline />
          <NavBar openForm={handleOpenForm} />
          <Container maxWidth="xl" sx={{mt: 3}}>
            <ActivityDashboard 
                activities={activities} 
                selectActivity={handleSelectActivity} 
                cancelSelectActivity={handleCancelSelectActivity}
                selectedActivity={selectedActivity}
                editMode={editMode}
                openForm={handleOpenForm}
                closeForm={handleFormClose}
            />
          </Container>
      </Box>
  )
}

export default App
