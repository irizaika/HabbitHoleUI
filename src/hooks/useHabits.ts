import { useState, useEffect } from "react";
import { habitService } from "../services/habitService";
import { HabitDto, Habit } from "../apiClient";

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHabits = async () => {
    setLoading(true);
    try {
      const data = await habitService.getAll();
      setHabits(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addHabit = async (habit: HabitDto) => {
    await habitService.create(habit);
    fetchHabits();
  };

  const updateHabit = async (id: number, habit: HabitDto) => {
    await habitService.update(id, habit);
    fetchHabits();
  };

  const deleteHabit = async (id: number) => {
    await habitService.delete(id);
    fetchHabits();
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return { habits, loading, fetchHabits, addHabit, updateHabit, deleteHabit };
};
