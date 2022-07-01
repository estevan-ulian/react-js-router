import { useEffect, useState } from "react";

function Home() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {

    function loadApi() {
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setNutri(json)
      })
    }

    loadApi()
  }, [nutri])

  function renderPosts() {
    return (
      nutri.map((item) => {
        return (
            <article 
            className={`
            flex flex-col justify-center basis-56
            w-full mt-6 py-6 px-4
            bg-white border border-gray-300
            transition-all duration-300 ease-in
             md:hover:scale-[1.01]`}
            key={item.id}
            >
              <strong className="text-2xl mt-2 mb-4">{item.titulo}</strong>

              <img src={item.capa} alt={item.titulo} />
              <small className="text-xs">Categoria: {item.categoria}</small>
              <p className="text-sm mt-2 mb-8">{item.subtitulo}</p>

              <a href="/" className="flex justify-center h-8 border-2 border-blue-500 rounded-md text-lg font-bold text-blue-500 transition-all duration-300 ease-in hover:bg-blue-500 hover:text-white">Acessar</a>

            </article>
        )
      })
    )
  }

  return (
    <div className="flex flex-col w-full justify-center items-center py-5">
      <div className={`
      sm:grid md:grid-cols-2 mx-2 xl:mx-4 xl:grid-cols-3 3xl:flex 
      md:gap-4 3xl:flex-wrap 3xl:justify-center
      `}>
        {renderPosts()}
      </div>
    </div>
  );
}

export default Home;
