import './App.css'
import Password from './components/Password'
import VaultReports from './components/VaultReports'
import logger from "./utils/logger.js";

function App() {
logger.warn('>>> Entering App()', { "event.action": "App" });

logger.warn('<<< Exiting App()', { "event.action": "App" });
  return (
    <>
      <Password />
      <VaultReports />
    </>
  )
}

export default App
