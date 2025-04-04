import { RouteHandle } from "@/@types/RouteHanlde" // TODO type usado para tipar o title do 
import { useMatches } from "react-router-dom"
import { Helmet } from "react-helmet-async"

export function useTitleFromRouter() {
    const matches = useMatches()

    const currentTitle = matches.map((matche) => (matche.handle as RouteHandle)?.title).filter(Boolean).at(-1) || 'pizza.shop'

    const fullTitle = `${currentTitle} | pizza.shop`
    return (
        <Helmet>
            <title>{fullTitle}</title>
        </Helmet>
    )
}