import moment from "moment";
import { Todo as TodoType } from "../features/todos/todosSlice";
import { CheckedBox, UncheckedBox } from "../icons";

export default function Todo({ title, dueDate, isCompleted }: TodoType) {
  return (
    <div
      className={`flex gap-2 ${isCompleted && "text-slate-400 items-center"}`}
    >
      <button
        type="button"
        className="outline-none border-none w-8 h-8 self-start"
        disabled={isCompleted}
      >
        {isCompleted ? <CheckedBox /> : <UncheckedBox />}
      </button>
      <div>
        <p
          className={`${!isCompleted && "font-[500]"} text-xl tracking-normal`}
        >
          {title}
        </p>
        {!isCompleted && (
          <p className="text-slate-500 text-sm">
            ⏰ {moment(dueDate).calendar()}
          </p>
        )}
      </div>
    </div>
  );
}
