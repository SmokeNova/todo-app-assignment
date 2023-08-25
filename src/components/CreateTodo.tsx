import { DescriptionIcon, SummaryIcon } from "../icons";

export default function CreateTodo() {
  return (
    <div className="bg-white px-8 py-5 opacity-100 w-[50%] min-w-[380px] rounded-lg max-w-[800px] text-black">
      <h2 className="text-2xl tracking-normal font-bold">New Task</h2>
      <form className="mt-3 mx-auto max-w-[80%] flex flex-col gap-3 md:gap-5">
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
          />
        </div>
        <hr />
      </form>
    </div>
  );
}
