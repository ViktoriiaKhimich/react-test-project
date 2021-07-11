import './App.css';
import CollapsibleComponent from './CollapsibleComponent'
import { data } from './data'

function App() {
  return (
    <div>
      <CollapsibleComponent data={data} />
    </div>
  )
}

export default App;
