import { useTrackHabits } from "../hooks/useTrackHabits";
import "./TrackHabits.css";

function HabitProgressCell({ value, count, frequency, type }: {
  value: number;
  count: number;
  frequency: string;
  type: string;
}) {
  const notDone = frequency.toLowerCase() === type && value < count;

  return (
    <td className={`progress-cell ${notDone ? "not-done" : "done"}`}>
      {value} {frequency.toLowerCase() === type && `/ ${count}`}{" "}
      {frequency.toLowerCase() === type && (value >= count ? "🔥" : "⏳")}
    </td>
  );
}

export default function TrackHabits() {
  const { habits, progress, loading, error, completeHabit } = useTrackHabits();

  if (loading) return <p>Loading habits...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="track-container">
      <h2 className="track-title">Track Habits</h2>

      <table className="track-table">
        <thead>
          <tr>
            {["Habit", "Today", "This Week", "This Month", "This Year", "Streak", "Action"].map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {habits.map((h) => {
            const p = progress[h.id!] || {};
            return (
              <tr key={h.id}>
                <td className="habit-name">{h.title} ({h.frequency}, x{h.count})</td>
                <HabitProgressCell value={p.completedToday ?? 0} count={h.count} frequency={h.frequency} type="daily" />
                <HabitProgressCell value={p.completedThisWeek ?? 0} count={h.count} frequency={h.frequency} type="weekly" />
                <HabitProgressCell value={p.completedThisMonth ?? 0} count={h.count} frequency={h.frequency} type="monthly" />
                <HabitProgressCell value={p.completedThisYear ?? 0} count={h.count} frequency={h.frequency} type="yearly" />
                <td>🔥 {p.streak || 0}</td>
                <td>
                  <button className="checkin-button" onClick={() => completeHabit(h.id!)}>
                    Check In
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
