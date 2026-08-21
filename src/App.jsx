import './App.css'
import Password from './components/Password'
import VaultReports from './components/VaultReports'
import logger from "./utils/logger.js";

function App() {
logger.debug('>>> Entering App()');

logger.debug('<<< Exiting App()');
  return (
    <>
      <Password />
      <VaultReports />
    </>
  )
}

export default App
