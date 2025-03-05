import { useState } from "react";

interface CommentProps {
    id: number;
    user: string;
    avatar: string;
    text: string;
}

const Comment: React.FC<CommentProps> = ({user, avatar, text}) => {
    const [isExpanded, setIsExpanded] = useState(false)

    const shouldTruncate = text.length > 75;
    const displayText = isExpanded ? text : `${text.slice(0, 75)}...`

    const toggleExpand = () => setIsExpanded(!isExpanded)

    return(
        <div className="bg-black/50 rounded-3xl mb-2 p-4">
            <div className="flex items-center mb-2">
                <img src={avatar} alt={`${user}'s avatar`} className="w-6 h-6 rounded-full mr-2" />
                <h4 className="font-bold text-xs text-white">{user}</h4>
            </div>
            <p className="text-white text-sm">{displayText}</p>
            {shouldTruncate && (
                <div className="text-right">
                    <button
                        className="text-white text-xs cursor-pointer border-none bg-transparent underline"
                        onClick={toggleExpand}
                    >
                        {isExpanded ? 'Mostrar menos' : 'Ver mas'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Comment;