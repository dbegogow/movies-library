import { useState } from "react";
import { useHistory } from "react-router";

const usePresentSuccess = () => {
    const [present, setPresent] = useState(false);
    const history = useHistory();

    if (present) {
        setTimeout(() => {
            history.push('/home');
        }, 800);
    }

    return [
        present,
        setPresent,
    ]
};

export default usePresentSuccess;