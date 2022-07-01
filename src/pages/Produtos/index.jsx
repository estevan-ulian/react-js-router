import { useParams } from 'react-router-dom'

export default function Produto() {

    const { id } = useParams();

    return (
        <div>
            Meu produto é {id}
        </div>
    )
}