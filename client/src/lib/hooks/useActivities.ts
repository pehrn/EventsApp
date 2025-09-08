import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = () => {
    
    const endpoint = '/activities';
    const queryClient = useQueryClient();
    
    const {data: activities, isPending } = useQuery({
        
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>(endpoint);
            return response.data;
        }
    });
    
    const updateActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.put(endpoint, activity);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']           
            });            
        }
    })
    
    return {
        activities,
        isPending,
        updateActivity
    }
}