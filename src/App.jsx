import './App.css'
import Password from './components/Password'
import logger from "./utils/logger.js";

function App() {
logger.debug('>>> Entering App()');

logger.debug('<<< Exiting App()');
  return (
    <>
      <Password />
    </>
  )
}

export default App
