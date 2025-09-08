import { useQuery } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = () => {
    
    const endpoint = '/activities';

    const {data: activities, isPending } = useQuery({
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>(endpoint);
            return response.data;
        }
    });
    
    return {
        activities,
        isPending
    }
}