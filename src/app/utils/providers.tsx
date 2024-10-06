"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export const Providers = ({children}: Props) => {
    return (
      
        <QueryClientProvider client={new QueryClient()}>
            {children}
            <ReactQueryDevtools
                initialIsOpen={false}
                buttonPosition = "bottom-left"
            />
        </QueryClientProvider>
    )
}