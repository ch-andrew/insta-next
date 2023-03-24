import { useEffect, useState } from 'react'
import minifaker, { username } from 'minifaker'
import 'minifaker/locales/en'

export default function Suggestions() {
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const suggestions = minifaker.array(5, (i) => (
            {
                username: minifaker.username({locale: "en"}),
                jobTitle: minifaker.jobTitle(),
                id: i
            }
        ))
        setSuggestions(suggestions)
    }, [])

    return (
        <div className={"p-4"}>
            <div className={"flex justify-between mb-5 text-sm"}>
                <h3 className={"font-bold text-gray-400"}>Suggestions for you</h3>
                <button className={"text-gray-600 font-semibold"}>See All</button>
            </div>
            {suggestions.map(suggestion => (
                <div className={"flex items-center justify-between mt-3"} key={suggestion.id}>
                    <img className={"h-14 rounded-full p-[1.5px] border "} src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`} alt={username}/>
                    <div className={"flex-1 ml-4"}>
                        <h2 className={"font-semibold text-sm"}>{suggestion.username}</h2>
                        <h3 className={"text-sm text-gray-400 truncate"}>{suggestion.jobTitle}</h3>
                    </div>
                    <button className={"font-semibold text-blue-400 text-sm"}>Follow</button>
                </div>
            ))}
        </div>
    )
}