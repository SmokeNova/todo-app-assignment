import { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../features/todos/todosSlice";
import { isPast } from "date-fns";

export function useCreateTodo(fn: () => void) {
  const dispatch = useDispatch();
  const initialData = {
    title: "",
    description: "",
    dueDate: new Date(),
  };
  type FieldData = typeof initialData;

  const [data, setData] = useState(initialData);
  const [dateError, setDateError] = useState<string | null>(null);

  const { title, description, dueDate } = data;

  function updateFields(field: Partial<FieldData>) {
    setData((prev) => {
      return { ...prev, ...field };
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (isPast(dueDate)) {
      setDateError("This date has passed. Please enter an upcoming date.");
      return;
    }
    dispatch(createTodo({ title, description, dueDate }));
    return fn();
  }

  return {
    title,
    description,
    dueDate,
    dateError,
    updateFields,
    handleSubmit,
  };
}
