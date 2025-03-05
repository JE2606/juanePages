import { useState } from "react";

interface LikeButtonProps {
    initialLiked: boolean;
    onLike: () => Promise<void>;
    onUnLike: () => Promise<void>;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ initialLiked, onLike, onUnLike }) => {

    const [liked, setLiked] = useState(initialLiked);
    const [loading, setLoading] = useState(false)

    const handleLike = async () => {
        setLiked((prevLiked) => !prevLiked)
        setLoading(true)

        try {
            if (!liked) {
                await onLike()
            } else {
                await onUnLike();
            }
        } catch (error) {
            console.error("error al enviar el like: ", error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <button
            onClick={handleLike}
            className={`relative text-gray-400 hover:text-red-500 transition-all hover:cursor-pointer ${liked ? "text-red-500 scale-125" : ""}`}
            disabled={loading}
        >
            <i className={`fas fa-heart ${liked ? "animate-ping" : ""}`}></i>
        </button>
    )

}