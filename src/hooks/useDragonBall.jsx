import { useEffect, useState } from "react";

const useDragonBall = () => {
    const [ DragonBall, setDragonBall ] = useState([]);

    const fetchDragonBall = () => {
        fetch('https://dragonball-api.com/api/planets')
        .then(response => {
            if(!response.ok) {
            throw new Error(`Error HTTP ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setDragonBall(data.items)
        })
        .catch(error => {
            console.error("Hubo un error:", error.message)
        })
    }

    return{
        fetchDragonBall,
        DragonBall
    }
}

export default useDragonBall