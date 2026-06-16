// here will be my public page accessible for everyone.
// no login will be needed as this is my public page.

export default function Home() {
    const movies = [
        "The Lord of the Rings: The Fellowship of the Ring",
        "The Lord of the Rings: The Two Towers",
        "The Lord of the Rings: The Return of the King",
        "Batman Begins",
        "Joker",
        "Matrix",
        "Mad Max: Fury Road",
        "Last Samurai",
        "The Avengers",
        "Star Wars: The Phantom Menace",
        "Star Wars: Attack of the Clones",
        "Star Wars: Revenge of the Sith",
        "Creed",
        "Lucy",
        "Frankenstein",
        "The Nun",
        "Insidious",
        "Annabelle",
    ];

    return (
        // bg-sky-50 gives the whole page a very light sky-blue background
        <div className="min-h-screen bg-sky-50 p-8">
            <h1 className="text-4xl font-bold text-center text-sky-700 mb-2">
                🎬 Movie App
            </h1>
            <p className="text-center text-slate-500 mb-8">
                Welcome! Below you can find the movies you may like
            </p>

            {/* grid: 1 column on small screens, more columns on bigger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {movies.map((movie) => (
                    // each card: soft mint background, rounded corners, light shadow
                    <div
                        key={movie}
                        className="card bg-emerald-50 border border-emerald-100 shadow-sm p-4"
                    >
                        <p className="text-slate-700">{movie}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}