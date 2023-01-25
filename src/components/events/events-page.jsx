import Image from 'next/image'
import Link from 'next/link'

const EventsPage = ({data}) => {
  return (
    <div className='events-page'>
        { data.map( ev =>
            <Link className='card' key={ ev.id } href={ `/events/${ ev.id }` }>
                <Image alt={ ev.title } width={ 400 } height={ 300 } src={ ev.image } />
                <h2>{ ev.title }</h2>
            </Link>
        ) }
    </div>
  )
}

export default EventsPage