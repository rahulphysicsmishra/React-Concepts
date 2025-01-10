import FitnessDashboard from "./pages/Dashboard"
import WalkingTracker from "./pages/Walking"
import GoalSetter from "./pages/GoalSetter";
import { useState } from "react";

function App() {
  const [steps, setSteps] = useState(0);

  return (
    <>
     <FitnessDashboard />
     < WalkingTracker steps={steps} setSteps={setSteps}  />
     <GoalSetter steps={steps} />
    </>
  )
}

export default App
