import React from "react"

export default interface Props {
    children: React.ReactNode
    col? : number,
    cols?: {
        xs: number,
        sm: number,
        md: number,
        lg: number,
        xl: number
    }
}