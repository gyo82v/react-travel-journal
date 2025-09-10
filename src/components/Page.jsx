import Card from "./Card"

export default function Page({data, title}){
    const h2 = `text-xl text-slate-600 font-bold sm:mt-6 sm:ml-10`
    const cardSection = `mt-6 sm:mt-10 flex flex-wrap gap-5 justify-center`
    
    const cardArr = data.map(c => <Card data={c} key={c.id} />)

    return(
        <section className="p-4">
            <h2 className={h2}>{title}</h2>
            <section className={cardSection}>
                {cardArr}
            </section>
        </section>
    )
}