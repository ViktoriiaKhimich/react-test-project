import './App.css';
import React, { useState, useCallback } from 'react';
import { data } from './data'

const CollapsibleComponent = ({ data }) => {

  const [showChildren, setShowChildren] = useState(false)

  const handleClick = useCallback(() => {
    setShowChildren(!showChildren)
  }, [setShowChildren, showChildren])

  return (
    <div className='continentsList'>
      {data.map(({ id, name }) =>
        <span key={id} onClick={handleClick} className='listItem' style={{ backgroundColor: showChildren ? '#DCDCDC	' : '#F7F7F7' }}>
          <p className='title'>{name}</p>
        </span>
      )}
      <div className='children'>
        {data.map(({ children }) => {
          return showChildren && children?.map(child => <CollapsibleComponent data={[child]} />)
        })}
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <CollapsibleComponent data={data} />
    </div>
  )
}

export default App;
