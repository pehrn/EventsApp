import {useState} from "react";
import {CssBaseline, Container, Box, Typography} from "@mui/material";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { useActivities } from "../../lib/hooks/useActivities";

function App() {
    
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const {activities, isPending} = useActivities();

  
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
      <Box sx={{bgcolor: '#eeeeee', minHeight: '100vh'}}>
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
