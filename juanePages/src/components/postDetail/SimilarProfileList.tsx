import SimilarProfile from "./SimilarProfile";

const profiles = [
    { id: 1, username: 'Usuario1', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s' },
    { id: 2, username: 'Usuario2', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s' },
    { id: 3, username: 'Usuario3', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s' },
    { id: 4, username: 'Usuario4', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s' }
];

const SimilarProfileList: React.FC = () => {
    return(
        <div className="grid grid-cols-2 gap-4">
            {profiles.map(profile => (
                <SimilarProfile key={profile.id} username={profile.username} img={profile.img} />
            ))}
        </div>
    )
}

export default SimilarProfileList;