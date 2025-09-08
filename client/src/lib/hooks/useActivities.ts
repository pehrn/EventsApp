import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useActivities = () => {
    
    const endpoint = 'http://localhost:5000/api/activities';

    const {data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await axios.get<Activity[]>(endpoint);
            return response.data;
        }
    });
    
    return {
        activities,
        isPending
    }
}