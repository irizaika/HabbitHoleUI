// src/components/HabitItem.tsx
import React, { useState } from "react";
//import { Habit } from "../types";
import { HabitDto, Habit } from "../apiClient";
import { Button } from "./Button";
import "./HabitItem.css";

interface Props {
  habit: Habit;
  onUpdate: (id: number, habit: HabitDto) => void;
  onDelete: (id: number) => void;
}

export const HabitItem: React.FC<Props> = ({ habit, onUpdate, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(habit.title);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [count, setCount] = useState(habit.count);

 return (
    <div className="habit-item">
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={frequency} onChange={(e) => setFrequency(e.target.value)} />
          <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
          <Button color="#1976d2" onClick={() => { onUpdate(habit.id!, new HabitDto({ title, frequency, count })); setEditing(false); }}>Save</Button>
          <Button color="gray" onClick={() => setEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <span className="habit-title">{habit.title}</span>
          <span className="habit-meta">{habit.frequency} (x{habit.count})</span>
          <div className="habit-actions">
            <Button color="#ff9800" onClick={() => setEditing(true)}>Edit</Button>
            <Button color="#e53935" onClick={() => onDelete(habit.id!)}>Delete</Button>
          </div>
        </>
      )}
    </div>
  );
};