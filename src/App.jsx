import Activitybar from "./components/activitybar/Activitybar";
import Sidebar from "./components/sidebar/Sidebar";
import Taskbar from "./components/taskbar/Taskbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <Taskbar />
      <div className="flex">
        <Activitybar/>
        <Sidebar />
      </div>
    </>
  );
}

export default App;
