import { Carousel } from '@/components/postDetail/Carousel'
import { LikeButton } from '@/components/postDetail/LikeButton'
import { Divisor } from '@/components/postDetail/Divisor'
import { PostMap } from '@/components/postDetail/PostMap'
import CommentList, { CommentListProps } from '@/components/postDetail/CommentList'
import SimilarProfileList from '@/components/postDetail/SimilarProfileList'

const slides = [
    'https://media.istockphoto.com/id/465377790/es/foto/salto-golden-retriever-cachorro.jpg?s=612x612&w=0&k=20&c=HVymMnER-YmYt4ucnHr-_IMFTkctwJJtjgbNUwUnP9g=',
    'https://media.istockphoto.com/id/465377790/es/foto/salto-golden-retriever-cachorro.jpg?s=612x612&w=0&k=20&c=HVymMnER-YmYt4ucnHr-_IMFTkctwJJtjgbNUwUnP9g=',
    'https://media.istockphoto.com/id/465377790/es/foto/salto-golden-retriever-cachorro.jpg?s=612x612&w=0&k=20&c=HVymMnER-YmYt4ucnHr-_IMFTkctwJJtjgbNUwUnP9g='
]

const enviarLike = async () => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve() : reject('Error al enviar el like');
        }, 20000)
    })
}

const enviarUnlike = async () => {
    return new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve() : reject('Error al enviar el like');
        }, 20000)
    })
}

const comments: CommentListProps['comments'] = [
    { id: 1, user: 'Usuario1', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Este es un comentario corto.' },
    { id: 2, user: 'Usuario2', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Muy buen aporte, me ha servido bastante.' },
    { id: 3, user: 'Usuario3', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'No estoy de acuerdo con algunos puntos, pero en general es un buen contenido.' },
    { id: 4, user: 'Usuario4', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Me ha encantado la explicación, especialmente la parte donde detallas cada concepto de manera clara y precisa. Se nota el esfuerzo y la dedicación en la información compartida, lo cual hace que sea más fácil de entender incluso para quienes no tienen experiencia previa en este tema. Ojalá más contenido como este estuviera disponible en la web, ya que facilita el aprendizaje de una manera dinámica y entretenida. Muchas gracias por compartirlo, estaré esperando más contenido similar en el futuro.' },
    { id: 5, user: 'Usuario5', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Excelente artículo, sigue así!' },
    { id: 6, user: 'Usuario6', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Podrías ampliar más la parte sobre los detalles técnicos? Me interesa mucho conocer más sobre este tema y siento que podría ser de gran ayuda para muchas personas que están empezando en este campo.' },
    { id: 7, user: 'Usuario7', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Este tema siempre me ha parecido interesante, y la forma en que lo explicas lo hace aún más atractivo. Me gustaría ver más ejemplos prácticos para aplicarlo en casos reales. Muchas gracias por compartir.' },
    { id: 8, user: 'Usuario8', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'No entendí bien la parte final, ¿podrías explicarla de otra manera?' },
    { id: 9, user: 'Usuario9', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Me ha ayudado a entender varios conceptos que antes no tenía claros, definitivamente recomendaré este artículo a otras personas interesadas en el tema.' },
    { id: 10, user: 'Usuario10', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'No estoy seguro de si esto aplica en todos los casos, pero en mi experiencia personal ha sido bastante útil. Lo probaré en mi próximo proyecto.' },
    { id: 11, user: 'Usuario11', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Tu artículo me ha dado una nueva perspectiva sobre este tema. Antes lo veía de una manera muy diferente, pero ahora comprendo mejor sus implicaciones. Me encantaría seguir explorando más sobre esto y ver otros artículos relacionados que puedas escribir en el futuro. Gracias por el esfuerzo y el detalle en la explicación.' },
    { id: 12, user: 'Usuario12', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Lo compartiré con mis amigos, seguro les interesa.' },
    { id: 13, user: 'Usuario13', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Este contenido me ha sido de gran utilidad. Ahora entiendo mejor cómo funciona y cómo puedo aplicarlo en mis propios proyectos. Definitivamente valió la pena leerlo completo, aunque al inicio pensé que era muy largo. Sin duda alguna, espero que sigas publicando más información de este estilo para poder seguir aprendiendo. Muchas gracias por el gran aporte, se nota el esfuerzo detrás de cada detalle explicado.' },
    { id: 14, user: 'Usuario14', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Buen punto, nunca lo había visto desde esa perspectiva.' },
    { id: 15, user: 'Usuario15', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1UgqS5rFmz9MSxUUDdrFDdnmxFPqln-C9Q&s', text: 'Me gustaría ver más información sobre este tema en el futuro. Has explicado muy bien los conceptos clave y me ha servido para aclarar muchas dudas que tenía. Ojalá puedas seguir compartiendo contenido así. ¡Muchas gracias!' }
];


export default function PostDetails() {
    return (
        <section className='p-2'>
            <div className='mb-2'>
                <Carousel autoSlide={true}>
                    {slides.map((s) => (
                        <img key={s} src={s} alt="slide" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ))}
                </Carousel>
            </div>
            <div
                className='flex justify-between gap-2 mb-2'
            >
                <h1 className='font-black'>
                    Live Party Rochy RD at Lovera 10 PM - Night of Terror
                </h1>
                <div className='p-2'>
                    <LikeButton
                        initialLiked={false}
                        onLike={enviarLike}
                        onUnLike={enviarUnlike}
                    />
                </div>
            </div>
            <div className='flex items-center gap-2 mb-2'>
                <h3 className='text-xs font-bold text-zinc-600'>
                    Free
                </h3>
                <Divisor />
                <h3 className='text-xs font-bold text-zinc-600'>
                    Disponible
                </h3>
                <Divisor />
                <h3 className='text-xs font-bold text-zinc-800'>
                    1h ago
                </h3>
                <Divisor />
                <h3 className='text-xs font-bold text-zinc-800'>
                    La Venezuela
                </h3>
            </div>
            <PostMap />
            <div className='mb-2'>
                <h2 className='font-semibold'>Description</h2>
                <p className='font-thin text-zinc-500'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea optio aperiam, quasi autem aliquid omnis iusto odit hic! Iusto commodi maiores molestias quidem excepturi soluta asperiores animi eaque facilis vitae!
                </p>
            </div>
            <div className='mb-4'>
                <h2 className='font-semibold mb-2'>Comments</h2>
                <CommentList comments={comments}/>
            </div>
            <div className='mb-2'>
                <h2>Similar Profiles</h2>
                <SimilarProfileList />
            </div>
        </section>
    )
}
