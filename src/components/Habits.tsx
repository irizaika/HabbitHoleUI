import React from "react";
import { useHabits } from "../hooks/useHabits";
import { HabitDto } from "../apiClient";
import { HabitItem } from "../components/HabitItem";
import { Button } from "../components/Button";
import "./Habits.css";

export default function Habits() {
  const { habits, addHabit, updateHabit, deleteHabit } = useHabits();
  const [newTitle, setNewTitle] = React.useState("");
  const [newFrequency, setNewFrequency] = React.useState("");
  const [newCount, setNewCount] = React.useState(1);

  const handleAdd = () => {
    if (!newTitle || !newFrequency) return alert("Fill title and frequency");
    addHabit(new HabitDto({ title: newTitle, frequency: newFrequency, count: newCount }));
    setNewTitle(""); setNewFrequency(""); setNewCount(1);
  };

  return (
    <div className="habits-container">
      <h2 className="habits-title">My Habits</h2>

      <div className="habits-form">
        <input placeholder="Title" value={newTitle} onChange={e => setNewTitle(e.target.value)} />
        <input placeholder="Frequency" value={newFrequency} onChange={e => setNewFrequency(e.target.value)} />
        <input type="number" value={newCount} onChange={e => setNewCount(Number(e.target.value))} />
        <Button onClick={handleAdd}>Add</Button>
      </div>

      {habits.map(habit => (
        <HabitItem key={habit.id} habit={habit} onUpdate={updateHabit} onDelete={deleteHabit} />
      ))}
    </div>
  );
}
