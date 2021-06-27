import { useState } from "react";

const usePresentError = () => {
    const [present, setPresent] = useState(false);

    if (present) {
        setTimeout(() => {
            setPresent(false);
        }, 1000);
    }

    return [
        present,
        setPresent,
    ]
};

export default usePresentError;