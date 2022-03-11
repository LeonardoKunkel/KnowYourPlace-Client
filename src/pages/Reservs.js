import { useContext, useEffect } from "react"
import ReservsContext from "../context/Reservs/ReservsContext"

export default function Reservs() {

    const ctxReservs = useContext(ReservsContext);

    const { getReservations } = ctxReservs

    useEffect(() => { getReservations() }, [])

    return (
        <>
            <button>Checar</button>
        </>
    )
}
