import { useState, useCallback } from "react";

const useCollapsible = () => {

    const [showChildren, setShowChildren] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null)

    const handleClick = useCallback((name, __typename) => {
        console.log(__typename);
        setSelectedCountry(name)
        setShowChildren(!showChildren)
        // if (__typename === 'Languages') {

        // }
    }, [setShowChildren, showChildren])

    return { showChildren, selectedCountry, setShowChildren, handleClick };

}

export default useCollapsible;