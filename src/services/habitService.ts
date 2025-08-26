import { Habit, HabitDto } from "../apiClient";
import { createAuthClient } from "./apiClientFactory";

export const habitService = {
  getAll: async (): Promise<Habit[]> => {
    const client = createAuthClient();
    return await client.habitsAll();
  },
  create: async (habit: HabitDto): Promise<void> => {
    const client = createAuthClient();
    await client.habitsPOST(habit);
  },
  update: async (id: number, habit: HabitDto): Promise<void> => {
    const client = createAuthClient();
    await client.habitsPUT(id, habit);
  },
  delete: async (id: number): Promise<void> => {
    const client = createAuthClient();
    await client.habitsDELETE(id);
  },
};
