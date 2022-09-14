import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  const clock = () => {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    setHour(hours * 30);
    setMinute(minutes * 6);
    setSecond(seconds * 6);
  };

  useEffect(() => {
    clock();
    setInterval(clock, 1000);

    return () => {
      clearInterval(clock);
    };
  }, []);

  return (
    <div className="rounded-full bg-white border-[5px] border-white shadow-inner shadow-[rgb(0 0 0 / 0.10)]">
      <div className="overflow-hidden relative w-[350px] h-[350px] rounded-full">
        <span
          className="absolute h-24 w-1.5 m-auto top-[-27%] origin-bottom left-0 bottom-0 right-0 bg-black z-10"
          style={{ transform: `rotate(${hour}deg)` }}
        ></span>
        <span
          className="absolute h-32 w-1 m-auto top-[-38%] origin-bottom left-0 bottom-0 right-0 bg-black z-10"
          style={{ transform: `rotate(${minute}deg)` }}
        ></span>
        <span
          className="absolute h-24 w-0.5 m-auto top-[-26%] left-0 bottom-0 right-0 rounded-[4px] bg-red-500 origin-bottom z-10"
          style={{ transform: `rotate(${second}deg)` }}
        ></span>
        <span className="absolute top-0 left-0 right-0 bottom-0 w-3 h-3 rounded-full bg-white border-2 border-black m-auto z-10"></span>
      </div>
    </div>
  );
}

export default App;
