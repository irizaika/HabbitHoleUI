import { Habit, HabitProgressDto } from "../apiClient";
import { createAuthClient } from "./apiClientFactory";

export const trackHabitService = {
  getAll: async (): Promise<Habit[]> => {
    const client = createAuthClient();
    return await client.habitsAll();
  },

  getProgress: async (habitId: number): Promise<HabitProgressDto> => {
    const client = createAuthClient();
    return await client.completionsGET(habitId);
  },

  completeHabit: async (habitId: number): Promise<void> => {
    const client = createAuthClient();
    await client.completionsPOST(habitId);
  },
};
