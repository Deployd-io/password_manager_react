import './App.css'
import Password from './components/Password'
import logger from "./utils/logger.js";

function App() {

logger.warn("App()=null): SOC2-AUDIT [CC6.1]: Password reset operation performed");
  return (
    <>
      <Password />
    </>
  )
}

export default App
