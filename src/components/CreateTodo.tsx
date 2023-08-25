import ReactDatePicker from "react-datepicker";
import { useCreateTodo } from "../hooks/useCreateTodo";
import { ClockIcon, DescriptionIcon, SummaryIcon } from "../icons";

type CreateTodoProps = {
  toggleVisibility: () => void;
};

export default function CreateTodo({ toggleVisibility }: CreateTodoProps) {
  const { title, description, dueDate, dateError, updateFields, handleSubmit } =
    useCreateTodo(toggleVisibility);

  return (
    <div className="bg-white px-8 py-5 opacity-100 w-[50%] min-w-[380px] rounded-lg max-w-[800px] text-black">
      <h2 className="text-2xl tracking-normal font-bold">New Task</h2>
      <form
        className="mt-3 mx-auto max-w-[80%] flex flex-col gap-3 md:gap-5"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-2 w-full items-center">
          <label htmlFor="title">
            <SummaryIcon />
          </label>
          <input
            autoFocus
            type="text"
            placeholder="Summary"
            className="py-2 px-3 grow border-none outline-none"
            required
            min={5}
            max={25}
            id="title"
            value={title}
            onChange={(e) => updateFields({ title: e.target.value })}
          />
        </div>
        <hr />
        <div className="flex gap-2 w-full items-center">
          <label htmlFor="description">
            <DescriptionIcon />
          </label>
          <input
            autoFocus
            type="text"
            placeholder="Description"
            className="py-2 px-3 grow border-none outline-none"
            min={5}
            max={40}
            id="description"
            value={description}
            onChange={(e) => updateFields({ description: e.target.value })}
          />
        </div>
        <hr />
        <div className="flex gap-2 w-full items-center flex-wrap">
          <label>
            <ClockIcon />
          </label>
          <ReactDatePicker
            selected={dueDate}
            onChange={(date) => updateFields({ dueDate: date as Date })}
            // onChange={(date) => setStartDate(date)}
            locale="pt-BR"
            showTimeSelect
            timeFormat="p"
            timeIntervals={15}
            dateFormat="Pp"
            placeholderText="Due Date"
          />
          {dateError && (
            <p className="text-red-600 text-sm mt-3 !w-full">{dateError}</p>
          )}
        </div>
        <hr />
        <button
          type="submit"
          className="py-3 font-semibold rounded-full bg-black text-white self-center px-16"
        >
          Save
        </button>
        <button
          type="button"
          className="py-3 font-semibold rounded-full text-black self-center px-16"
          onClick={toggleVisibility}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
