import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-2 bg-cover bg-center dark:text-white dark:bg-[url('/source/bg.png')]">
      <div className="w-[50%] h-screen">
        <div className="w-full h-[30%] flex flex-col item-center justify-center">
          <h1 className="text-2xl text-center">Welcome</h1>
          <span className="text-center">My Portfolio</span>
        </div>
        <div className="w-full h-[50%] bg-white/20 backdrop-blur-lg">

        </div>
        <div className="w-full h-[20%]">

        </div>
      </div>
      {/* <DarkThemeToggle /> */}
    </main>
  );
}
