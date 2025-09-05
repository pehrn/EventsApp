import {useState} from "react";
import axios from "axios";
import {CssBaseline, Container, Box, Typography} from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useQuery } from "@tanstack/react-query";

function App() {
    
  const endpoint = 'http://localhost:5000/api/activities';  
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  
  const {data: activities, isPending } = useQuery({
      queryKey: ['activities'],
      queryFn: async () => {
          const response = await axios.get<Activity[]>(endpoint);
          return response.data;
      }
    })
  
  const handleSelectActivity = (id: string) => {
      setSelectedActivity(activities!.find(activity => activity.id === id));
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
  
  const handleSubmitForm = (activity: Activity) => {
    // if (activity.id) {
    //     setActivities(activities.map(a => a.id === activity.id ? activity : a));
    // } else {
    //     const newActivity = {...activity, id: activities.length.toString()};
    //     setSelectedActivity(newActivity);
    //     setActivities([...activities, newActivity]);
    // }
    console.log(activity);
    setEditMode(false);
  }
  
  const handleDeleteActivity = (id: string) => {
      console.log(id);
  }
    
  return (
      <Box sx={{bgcolor: '#eeeeee'}}>
          <CssBaseline />
          <NavBar openForm={handleOpenForm} />
          <Container maxWidth="xl" sx={{mt: 3}}>
              {!activities || isPending ? (
                  <Typography variant="h4" textAlign="center">Loading...</Typography> 
              ) : (
                  <ActivityDashboard
                      activities={activities}
                      selectActivity={handleSelectActivity}
                      cancelSelectActivity={handleCancelSelectActivity}
                      selectedActivity={selectedActivity}
                      editMode={editMode}
                      openForm={handleOpenForm}
                      closeForm={handleFormClose}
                      submitForm={handleSubmitForm}
                      deleteActivity={handleDeleteActivity}
                  />
              )}
          </Container>
      </Box>
  )
}

export default App
