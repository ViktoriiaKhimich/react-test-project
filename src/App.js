import './App.css';
import CollapsibleComponent from './CollapsibleComponent'
import { CONTINENTS } from './index'
import { useQuery } from '@apollo/client'


function App() {

  const { loading, error, data } = useQuery(CONTINENTS);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>`Error! ${error.message}`</h1>

  const { continents } = data;

  return (
    <div>
      <CollapsibleComponent data={continents} />
    </div>
  )
}

export default App;
