import { Divisor } from "../postDetail/Divisor";

interface PostItemProps{
    profileUrl: string;
    avatar: string;
    username: string;
    description: string;
    likes: number;
    comments: number;
    postedTime: string;
    postUrl: string;
}

const PostItem: React.FC<PostItemProps> = ({profileUrl, avatar, username, description, likes, comments, postedTime, postUrl}) =>{
    return(
        <a href={postUrl} className="block p-4 rounded-lg mb-4 hover:bg-gray-700 transition-colors">

            <div className="flex items-center mb-2">
                <a href={profileUrl} className="flex items-center">
                    <img src={avatar} alt={`${username}'s avatar`} className="w-8 h-8 rounded-full mr-2" />
                    <h3 className="font-bold text-sm hover:underline">{username}</h3>
                </a>
            </div>
            <p className="text-gray-300 text-xs mb-2">
                {description.length > 40 ? `${description.slice(0,40)}...` : description}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>{likes} likes</span>
                <Divisor />
                <span>{comments} comments</span>
                <Divisor />
                <span>{postedTime}</span>
            </div>

        </a>
    )
}

export default PostItem