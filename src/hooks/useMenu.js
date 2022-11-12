import { useState } from "react"

export const useMenu = () => {
    const [open, setOpen] = useState(false)

    return {
        open,
        setOpen
    }

}
