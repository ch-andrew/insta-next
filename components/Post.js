import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid'
import { HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'

export default function Post({ id, username, userImg, img, caption }) {
  return (
    <div className={"bg-white mb-7"}>
        {/* Post Header */}
        <div className={"flex items-center p-5"}>
            <div className={"mr-2 p-4 bg-yellow-300 rounded-full cursor-pointer hover:scale-125 transition-transform duration-200"}></div>
            {/* <img src={userImg} alt={username}/> */}
            <p className={"font-bold flex-1"}>{username}</p>
            <EllipsisHorizontalIcon className={"h-5"}/>
        </div>

        {/* Post Image */}
        <div>
            <img className={"object-cover w-full"} src={img} alt={`image post from ${username}`}/>
        </div>

        {/* Post */}
        <div className={"flex justify-between p-4"}>
            <div className={"flex space-x-4"}>
                <HeartIcon className={"btn"}/>
                <ChatBubbleOvalLeftEllipsisIcon className={"btn"} />
            </div>
            <BookmarkIcon className={"btn"} />
        </div>

        {/* Post Caption */}
        <div className={"flex space-x-1 px-4"}>
            <p className={"font-bold"}>{username}</p>
            <p className={""}>{caption}</p>
        </div>

        {/* Post Input Box */}
        <form className={"flex space-x-1 items-center p-4"}>
            <FaceSmileIcon className={"btn"} />
            <input className={"border-none flex-1 focus:ring-0"} type="text" placeholder="Enter your comment..."/>
            <button className={"text-blue-400 font-bold hover:text-blue-500"}>Post</button>
        </form>
    </div>
  )
}
5