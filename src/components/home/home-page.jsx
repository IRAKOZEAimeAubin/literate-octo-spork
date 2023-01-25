import Link from "next/link"
import Image from "next/image"

export const HomePage = ( { data } ) => {
  return (
    <div className="home-body">
        { data.map( ev =>
          <Link className="card" key={ ev.id } href={ `/events/${ ev.id }` }>
            <div className="image">
              <Image alt={ ev.title } width={ 400 } height={ 300 } src={ ev.image } />
            </div>
            <div className="content">
              <h2>{ ev.title }</h2>
              <p>{ ev.description }</p>
            </div>
          </Link>
        ) }
      </div>
  )
}