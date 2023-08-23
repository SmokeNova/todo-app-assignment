import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const { email, password, handleSubmit, updateFields } = useLogin();

  return (
    <section className=" w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl text-black font-[600] tracking-normal text-center">
          Log In
        </h1>
        <form
          className="flex flex-col min-w-[350px] gap-3"
          onSubmit={handleSubmit}
        >
          <input
            className="input-field"
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
          <input
            className="input-field"
            type="password"
            required
            min={8}
            max={25}
            placeholder="password"
            value={password}
            onChange={(e) => updateFields({ password: e.target.value })}
          />
          <button
            className="text-center bg-black text-white rounded-full font-[600] py-3 tracking-wide mt-6 hover:scale-[1.05] transition-transform duration-300"
            type="submit"
          >
            Log In
          </button>
        </form>
      </div>
    </section>
  );
}
