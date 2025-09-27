import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import agent from "../api/agent";

export const useActivities = (id?: string) => {
    
    const endpoint = '/activities';
    const queryClient = useQueryClient();
    
    const {data: activities, isPending } = useQuery({
        
        queryKey: ['activities'],
        queryFn: async () => {
            const response = await agent.get<Activity[]>(endpoint);
            return response.data;
        }
    });
    
    const {data: activity, isLoading: isLoadingActivity } = useQuery({
        queryKey: ['activities', id],
        queryFn: async () => {
            const response = await agent.get<Activity>(`/activities/${id}`);
            return response.data;
        },
        enabled: !!id
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
    });

    const createActivity = useMutation({
        mutationFn: async (activity: Activity) => {
            await agent.post(endpoint, activity);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            });
        }
    });

    const deleteActivity = useMutation({
        mutationFn: async (id: string) => {
            await agent.delete(`${endpoint}/${id}`);
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ['activities']
            });
        }
    });
    
    return {
        activities,
        isPending,
        updateActivity,
        createActivity,
        deleteActivity,
        activity,
        isLoadingActivity,
    }
}