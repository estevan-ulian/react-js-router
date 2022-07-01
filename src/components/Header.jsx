import { Link } from 'react-router-dom'

export default function Header(props) {

    return (
        <div className={`
        flex flex-col justify-center items-center py-3 bg-blue-500 text-white w-full
        `}>
            <header className="text-2xl font-bold">
            <h2>React JS</h2>
            </header>
            <nav className='mt-2'>
                <ul className="flex gap-2 text-sm">
                    <li>
                        <Link to='/' 
                        className='transition-all duration-100 ease-in text-gray-300 hover:text-white'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/sobre' 
                        className='transition-all duration-100 ease-in text-gray-300 hover:text-white'>
                            Sobre
                        </Link>
                    </li>
                    <li>
                        <Link to='/contato' 
                        className='transition-all duration-100 ease-in text-gray-300 hover:text-white'>
                            Contato
                        </Link>
                    </li>           
                </ul>
            </nav>
        </div>
    )
}