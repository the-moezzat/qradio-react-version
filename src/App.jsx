import Station from "./components/station/Station";
import Header from "./components/Header";
import Controller from "./components/Controller";
import Favorite from "./components/Favorite";

function App() {
  return (
    <div className="container max-w-[1366px] mx-auto px-3 grid items-center  h-screen">
      <div className="grid grid-cols-16 grid-rows-left gap-x-8 gap-y-4 w-full">
        <div className="col-span-9 ">
          <Header />
        </div>
        <div className="col-span-9 justify-items-center self-center">
          <Controller />
        </div>
        <div className="bg-yellow-500 col-span-9 ">
          <Favorite />
        </div>
        <div className=" col-span-7 col-start-10 row-span-full">
          <Station />
        </div>
      </div>
    </div>
  );
}

export default App;
