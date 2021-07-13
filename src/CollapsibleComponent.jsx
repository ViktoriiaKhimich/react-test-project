import useCollapsible from './useCollapsible'
import { v4 } from 'uuid'

const CollapsibleComponent = ({ data }) => {

    const { showChildren, selectedCountry, handleClick } = useCollapsible()

    return (
        <div className='continentsList'>
            {data.map(({ name, children, __typename }) =>
                <div className='continentsList'>
                    <span key={v4()} onClick={() => handleClick(name, __typename)} className='listItem' style={{ backgroundColor: name === selectedCountry ? '#DCDCDC	' : '#F7F7F7' }}>
                        <p className='title'>{name}</p>
                    </span>
                    <div className='children'>
                        {name === selectedCountry && showChildren && children?.map(child => <CollapsibleComponent data={[child]} />)}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CollapsibleComponent;