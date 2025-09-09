import Card from "../components/Card"

export default function Wishlist({data}){
    const container = `p-4`
    const h2 = `text-xl text-slate-600 font-bold`
    const cardSection = `mt-20 flex flex-wrap gap-5 justify-center`

    const cardArr = data.map(c => <Card data={c} key={c.id} />)
    return(
        <section className={container}>
            <h2 className={h2}>My wishlist:</h2>
            <section className={cardSection}>
               {cardArr}
            </section>
        </section>
    )
}