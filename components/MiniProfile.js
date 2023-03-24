
export default function MiniProfile() {
  return (
    <div className={"flex items-center justify-between px-4 pt-4"}>
        <div className={"p-4 bg-yellow-300 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200"}></div>
        <div className={"flex-1 ml-4"}>
            <h2 className={"font-bold"}>username</h2>
            <h3 className={"text-sm text-gray-400"}>Welcome to Instanext</h3>
        </div>
        <button className={"font-semibold text-blue-400 text-sm"}>Sign Out</button>
    </div>
  )
}
 