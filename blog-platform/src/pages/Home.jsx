function Home({posts}) {
    return (
        <div>
            <h1>Blog Posts:</h1>
            {
                posts.length === 0 ? (<p>No posts yet. Create one </p>) : (
                    posts.map((post, index)=>(
                        <div key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                        </div>
                    ))
                )
            }
        </div>
    )
}

export default Home

