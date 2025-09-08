import {NavLink} from "react-router-dom"

export default function Header(){
    const header = `flex items-center bg-slate-700 p-5`
    const h1 = `mr-auto text-2xl font-bold text-slate-50 xl:ml-10`
    const nav = `flex gap-3 text-slate-50 md:gap-16 md:text-lg md:mr-14 xl:mr-26 `
    const navlink = `transition-transform transition-colors duration-300 ease-in-out
                     font-semibold
                     hover:scale-120 active:scale-95 hover:text-slate-300 `
    return(
        <header className={header}>
            <h1 className={h1}>My travel journal</h1>
            <nav className={nav}>
                <NavLink to="/" className={({isActive}) => isActive ? `${navlink} underline` : navlink}>Home</NavLink>
                <NavLink to="wishlist" className={({isActive}) => isActive ? `${navlink} underline` : navlink}>Wishlist</NavLink>
            </nav>
        </header>
    )
}