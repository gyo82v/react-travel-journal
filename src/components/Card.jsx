export default function Card({data}) {
    const {imageUrl, location, googleMapsUrl, title, description} = data

    const container = `flex flex-col gap-3 sm:flex-row w-[30rem] sm:h-60
                       shadow-lg shadow-slate-700/30 rounded-lg p-3 h-[30rem]
                       hover:shadow-xl hover:bg-slate-100 hover:scale-105 transition-shadow`
    const transition = `transition-transform transition-colors duration-300 ease-in-out`
    const img = `sm:w-40 h-50 sm:h-full rounded-lg shadow-lg flex-1 sm:flex-2 `
    const a = `text-xs text-slate-400
               hover:scale-110 active:scale-95 hover:text-slate-500`

    return(
        <section className={`${container} ${transition}`}>
            <img src={imageUrl} alt="the location picture" className={img} />
            <section className="flex-1 sm:flex-3 flex flex-col justify-between">
                <section className="flex items-center gap-2 mt-5">
                    <p className="text-xs text-slate-700 font-bold">{location}</p>
                    <a href={googleMapsUrl} target="_blank" className={`${a} ${transition}`}>
                        View on google maps
                    </a>
                </section>
                <section className="mb-5">
                    <h3 className="text-slate-700 text-xl font-bold mb-3">{title}</h3>
                    <p className="text-sm text-slate-500 line-clamp-5">{description}</p>
                </section>
            </section>
        </section>
    )
}