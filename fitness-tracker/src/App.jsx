import FitnessDashboard from "./pages/Dashboard"
import WalkingTracker from "./pages/Walking"
import GoalSetter from "./pages/GoalSetter";
import { useState } from "react";
import WeeklyProgress from "./pages/WeeklyProgress";

function App() {
  const [steps, setSteps] = useState(0);

  return (
    <>
     <FitnessDashboard />
     < WalkingTracker steps={steps} setSteps={setSteps}  />
     <GoalSetter steps={steps} />
     <WeeklyProgress />
    </>
  )
}

export default App
