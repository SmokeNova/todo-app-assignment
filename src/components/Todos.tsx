import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { CreateTodo, Todo } from ".";

export default function Todos() {
  const [isVisible, setIsVisible] = useState(false);
  const todos = useSelector((store: RootState) => store.todos);

  const inComplete = todos.filter((item) => !item.isCompleted);
  const completed = todos.filter((item) => item.isCompleted);

  return (
    <section className="grow md:mt-14 md:p-7 max-h-[100vh] overflow-y-scroll no-scrollbar">
      <div className="inline-flex gap-8 flex-col">
        <button
          type="button"
          className="text-xl font-[700] tracking-normal text-start"
          onClick={() => setIsVisible((prev) => !prev)}
        >
          + Add new task
        </button>
        <div>
          <h2 className="text-xl font-[700] tracking-wide mb-4">Incomplete</h2>
          <div className="flex flex-col gap-6">
            {inComplete.map((task) => (
              <Todo key={task.id} {...task} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-[700] tracking-wide mb-4">Completed</h2>
          <div className="flex flex-col gap-2">
            {completed.map((task) => (
              <Todo key={task.id} {...task} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`w-[100vw] h-[100vh] flex justify-center items-center fixed bg-[rgba(0,0,0,.6)] top-0 left-0 ${
          !isVisible && "hidden"
        }`}
      >
        <CreateTodo />
      </div>
    </section>
  );
}
