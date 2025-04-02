import { Button } from "./ui/button";


export default function Header() {
  return (
    <div className="flex flex-col gap-4 items-center">

      <h1 className="text-4xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Small Win
      </h1>
      <h2 className="text-2xl mb-4">Tracker</h2>
      <p>Describe your what you want your future self to do, have and accomplish</p>
      <p>
      Track your small wins today and meet a future you want to live in.</p>
      {/*<div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />*/}
      <Button>Start</Button>
    </div>
  );
}
