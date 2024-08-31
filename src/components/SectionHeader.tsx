export const SectionHeader = ({
    title,
    eyebrow,
    description
}: {
    title: string;
    eyebrow: string;
    description: string
}) => {
    return (
        <div>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-blue-300 to-emerald-400 text-transparent bg-clip-text">{title}</p>
            </div>
            <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">{eyebrow}</h2>
            <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">{description}</p>
        </div >
    )
}