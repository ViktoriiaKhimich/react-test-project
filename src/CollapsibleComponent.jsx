import useCollapsible from './useCollapsible'

const CollapsibleComponent = ({ data }) => {

    const { showChildren, handleClick } = useCollapsible()

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

export default CollapsibleComponent;