import PostItem from "./PostItem";

const posts = [
    {
        id: 1,
        profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        username: "Usuario1",
        description: "Este es mi primer post",
        likes: 120,
        comments: 15,
        postedTime: "hace 2 horas",
        postUrl: "https://via.placeholder.com/600"
    },
    {
        id: 2,
        profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        username: "Usuario2",
        description: "Disfrutando del día",
        likes: 95,
        comments: 8,
        postedTime: "hace 30 minutos",
        postUrl: "https://via.placeholder.com/600"
    },
    {
        id: 3,
        profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        username: "Usuario3",
        description: "Una tarde increíble",
        likes: 200,
        comments: 35,
        postedTime: "hace 5 horas",
        postUrl: "https://via.placeholder.com/600"
    },
    {
        id: 4,
        profileUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s",
        username: "Usuario4",
        description: "Nueva foto de perfil",
        likes: 75,
        comments: 12,
        postedTime: "hace 10 minutos",
        postUrl: "https://via.placeholder.com/600"
    }
];

const RecentPosts: React.FC = () =>{
    return(
        <div className="bg-gray-900 p-4 rounded-lg">
            <h2 className="text-gray-300 font-semibold mb-4">Recent Posts</h2>
            {posts.slice(0,5).map(post => (
                <div key={post.id}>
                    <PostItem {...post} />
                    <hr className="border-gray-700 my-2" />
                </div>
            ))}
        </div>
    )
}

export default RecentPosts;