import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../features/todos/todosSlice";
import { CheckedBox, DeleteIcon, UncheckedBox } from "../icons";
import { formatDistanceToNow, intlFormat } from "date-fns";
import { Todo as TodoType } from "../vite-env";

export default function Todo({ title, dueDate, isCompleted, id }: TodoType) {
  const dispatch = useDispatch();

  return (
    <div
      className={`flex gap-2 ${isCompleted && "text-slate-400 items-center"}`}
    >
      <button
        type="button"
        className="outline-none border-none w-8 h-8 self-start"
        disabled={isCompleted}
        onClick={() => dispatch(completeTodo(id))}
      >
        {isCompleted ? <CheckedBox /> : <UncheckedBox />}
      </button>
      <div>
        <p
          className={`${!isCompleted && "font-[500]"} text-lg tracking-normal`}
        >
          {title}
        </p>
        {!isCompleted && (
          <p className="text-slate-500 text-sm">
            ⏰ {formatDistanceToNow(new Date(dueDate))} remaining, due:{" "}
            {intlFormat(new Date(dueDate))}
          </p>
        )}
      </div>
      {!isCompleted && (
        <button
          type="button"
          className="outline-none border-none ml-4 mt-4 self-center"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <DeleteIcon />
        </button>
      )}
    </div>
  );
}
