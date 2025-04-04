import { useTitleFromRouter } from "@/hooks/useTitleFromRouter";
import { Outlet } from "react-router-dom";

export function AppLayout () {
    const helmet = useTitleFromRouter()
    return (
        <div>
            <h1>Cabeçalho</h1>
            <div>
                {helmet}
                <Outlet/>
            </div>
        </div>
    )
}