import Post from "./Post"

export default function Posts() {
    const posts = [
        {
            id: "1",
            username: "mamamiasan",
            userImg: "b",
            img: "https://images.unsplash.com/photo-1679581858563-3c808d23f0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            caption: "Japan"
        },
        {
            id: "2",
            username: "brokephotography",
            userImg: "b",
            img: "https://images.unsplash.com/photo-1679498819175-9b2bc1df5ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
            caption: "I'm broke ahh"
        }
    ]

    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id}
                    id={post.id} 
                    username={post.username} 
                    userImg={post.userImg} 
                    img={post.img} 
                    caption={post.caption}/>
            ))}
        </div>
    )
}
