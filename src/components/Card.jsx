export default function Card({data}) {
    const {imageUrl, location, googleMapsUrl, title, description} = data

    const container = `flex flex-col gap-3 sm:flex-row w-[30rem] sm:h-60
                       shadow-lg shadow-slate-700/30 rounded-lg p-3 h-[30rem]
                       transition-transform transition-colors hover:shadow-xl hover:bg-slate-100`
    const section1 = `flex-1 sm:flex-3 flex flex-col justify-between `
    const section2 = `flex items-center gap-2 mt-5  `
    const section3 = `mb-5`
 
    const img = `sm:w-40 h-50 sm:h-full rounded-lg shadow-lg flex-1 sm:flex-2 `
    const h2 = `text-slate-700 text-xl font-bold mb-3`
    const locationStl = `text-xs text-slate-700 font-bold`
    const descriptionStl = `text-sm text-slate-500 line-clamp-5`
    const a = `text-xs text-slate-400`

    return(
        <section className={container}>
            <img src={imageUrl} alt="the location picture" className={img} />
            <section className={section1}>
                <section className={section2}>
                    <p className={locationStl}>{location}</p>
                    <a href={googleMapsUrl} target="_blank" className={a}>View on google maps</a>
                </section>
                <section className={section3}>
                    <h2 className={h2}>{title}</h2>
                    <p className={descriptionStl}>{description}</p>
                </section>
            </section>
        </section>
    )
}