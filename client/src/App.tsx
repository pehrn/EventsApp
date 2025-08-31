import {useEffect, useState} from "react";

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
          <h3>EventsApp</h3>
          <ul>
              {activities.map((activity) => (
                  <li key={activity.id}>{activity.title}</li>
              ))}
          </ul>
      </>
  )
}

export default App
