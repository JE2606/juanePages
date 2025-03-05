import { useState } from "react";
import Comment from "./Comment";

export interface CommentListProps {
    comments: {
        id: number;
        user: string;
        avatar: string;
        text: string;
    }[]
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
    const [visibleComments, setVisibleComments] = useState(2)

    const loadMoreComments = () => {
        setVisibleComments(prev => prev + 5)
    }

    return(
        <div className="max-w-lg mx-auto">
            {comments.slice(0, visibleComments).map(comment => (
                <Comment key={comment.id} {...comment} />
            ))}
            {visibleComments < comments.length && (
                <div className="text-right">
                    <button
                        onClick={loadMoreComments}
                        className="mt-4 px-4 py-2 border rounded-2xl hover:cursor-pointer font-bold text-xs"
                    >
                        Mostrar mas comentarios
                    </button>
                </div>
            )}
        </div>
    )
}

export default CommentList;