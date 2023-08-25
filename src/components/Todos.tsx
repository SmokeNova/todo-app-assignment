export default function Todos() {
  return (
    <section className="grow-1">
      <div className="my-auto">
        <button type="button" className="text-xl font-[700] tracking-normal">
          + Add new task
        </button>
        <div>incomplete tasks</div>
        <div>completed tasks</div>
      </div>
    </section>
  );
}
