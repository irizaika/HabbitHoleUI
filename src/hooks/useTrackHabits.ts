import { useEffect, useState } from "react";
import { Habit, HabitProgressDto } from "../apiClient";
import { trackHabitService } from "../services/trackHabitService";

export function useTrackHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [progress, setProgress] = useState<Record<number, HabitProgressDto>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // ✅ Fetch habits and progress
  const fetchHabitsAndProgress = async () => {
    try {
      setLoading(true);

      const data = await trackHabitService.getAll();
      setHabits(data);

      const progressMap: Record<number, HabitProgressDto> = {};
      for (const h of data) {
        const prog = await trackHabitService.getProgress(h.id!);
        progressMap[h.id!] = prog;
      }
      setProgress(progressMap);

      setError(null);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong while fetching habits");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle completion
  const completeHabit = async (habitId: number) => {
    await trackHabitService.completeHabit(habitId);
    const updatedProgress = await trackHabitService.getProgress(habitId);
    setProgress((prev) => ({ ...prev, [habitId]: updatedProgress }));
  };

  useEffect(() => {
    fetchHabitsAndProgress();
  }, []);

  return { habits, progress, loading, error, completeHabit, fetchHabitsAndProgress };
}
