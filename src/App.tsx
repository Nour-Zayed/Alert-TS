//import ALert from "./component/ALert/alert";

/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


*/
import {Ban} from 'lucide-react';

import ALert from "./component/ALert/alert";
const App = () =>{
  return(

    <div style={{margin:"2rem"}}>
      <ALert type={"alert-danger"} icon={<Ban/>}  title={"AlertCircle"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Porro amet doloribus commodi quia eius repellendus,
        quisquam quae dolorem quidem nihil voluptates 
        praesentium neque nulla voluptate quasi dignissimos.Ea, numquam distinctio."  />

  <ALert type={"alert-warnning"} icon={<Ban/>}  title={"AlertCircle"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Porro amet doloribus commodi quia eius repellendus,
        quisquam quae dolorem quidem nihil voluptates 
        praesentium neque nulla voluptate quasi dignissimos. Ea, numquam distinctio."  />
 

 <ALert type={"alert-error"} icon={<Ban/>}  title={"AlertCircle"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Porro amet doloribus commodi quia eius repellendus,
        quisquam quae dolorem quidem nihil voluptates 
        praesentium neque nulla voluptate quasi dignissimos. Ea, numquam distinctio."  />

 <ALert type={"alert-success"} icon={<Ban/>}  title={"AlertCircle"} description={<div>"Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Porro amet doloribus commodi quia eius repellendus,
        quisquam quae dolorem quidem nihil voluptates 
        praesentium neque nulla voluptate quasi  <a href='www.facebook.com'>dignissimos.Ea,</a> numquam distinctio."</div>}  />        
    </div>
  );
};
export default App;


