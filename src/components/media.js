
import React from "react"

import { useMediaQuery } from 'react-responsive'

const isMobile = () => {
    return useMediaQuery({ query: '(max-width: 1224px)' })
}

const isDesktop = () => {
    return useMediaQuery({ query: '(min-width: 1224px)' })
}

export { isMobile, isDesktop }
