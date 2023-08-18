import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"
import { Section } from "./components/Main"

export const App = ()=> {
    return(
            <main className="relative  max-w-[1440px]">
                <Header ></Header>
                <Outlet></Outlet>
            </main>
    )
}