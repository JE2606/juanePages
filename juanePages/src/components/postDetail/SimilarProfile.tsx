interface SimilarProfileProps {
    username: string;
    img: string
}

const SimilarProfile: React.FC<SimilarProfileProps> = ({ username, img }) => {
    return (
        <div className="relative w-full h-32 bg-gray-800 rounded-2xl overflow-hidden">
            <img
                src={img}
                alt={username}
                className="absolute inset-0 w-full h-full object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-lg font-bold">{username}</h3>
            </div>
        </div>
    )
}

export default SimilarProfile;