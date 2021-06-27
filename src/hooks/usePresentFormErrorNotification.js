import { useState } from "react";

const usePresentFormErrorNotification = () => {
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

export default usePresentFormErrorNotification;