
export default function FilterTabs() {
    const tabs = ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance", "Thriller", "Animation", "Documentary", "Crime"];
    const activeTab = ""; // Default active tab

    function handleTabChange(tab: string) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('genre', tab);
        const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState(null, '', newUrl);
        /*
        The first argument (null) is a small data object associated with that specific history entry. 
        This is used to restore data when the user clicks the "Back" button.
        */
        window.location.reload()
    }

    return (
        <div className="flex flex-wrap gap-3 py-6">
            {tabs.map((tab, index) => {
                const isActive = activeTab === tab;

                return (
                    <button
                        key={index}
                        onClick={() => handleTabChange(tab)}
                        className={`
                    px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border
                    ${isActive
                                ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30'
                                : 'bg-gray-800 text-gray-400 border-gray-700 hover:bg-gray-700 hover:text-white'
                            }
                `}
                    >
                        {tab}
                    </button>
                );
            })}
        </div>
    )
}