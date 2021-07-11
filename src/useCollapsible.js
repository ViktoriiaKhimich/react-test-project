import { useState, useCallback } from "react";

const useCollapsible = () => {

    const [showChildren, setShowChildren] = useState(false)

    const handleClick = useCallback(() => {
        setShowChildren(!showChildren)
    }, [setShowChildren, showChildren])

    return { showChildren, setShowChildren, handleClick };

}

export default useCollapsible;