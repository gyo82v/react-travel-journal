import {NavLink} from "react-router-dom"

export default function Header(){
    const header = `flex bg-indigo-600 p-5`
    const h1 = `mr-auto text-2xl font-bold text-indigo-50`
    const nav = `flex gap-3 text-indigo-50`
    const navlink = ``
    return(
        <header className={header}>
            <h1 className={h1}>My travel journal</h1>
            <nav className={nav}>
                <NavLink to="/" className={navlink}>Home</NavLink>
                <NavLink to="wishlist" className={navlink}>Wishlist</NavLink>
            </nav>
        </header>
    )
}