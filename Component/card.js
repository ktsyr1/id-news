import Link from 'next/link'

export default function Card(props) {
  const data = props.data
  return (
    <Link as={`/post/${data.id}`} href="/post/[id]" passHref   >
      <a className="card">
        <img src={data.image.replace('http://localhost/', 'http://192.168.0.104/')} alt={'icon ' + data.title} height="150" />
        <div className='cats'>
          {data.categories.map((cat, index) => { 
            return <div className='cat' key={index}>{cat.name}</div>
          })}
        </div>
        <div className='title'>
          <span>{data.date.history} </span>
          <span>{data.date.time.slice(0, 5)} </span>
          <h2 className='name'>{data.title.length >= 77 ? data.title.slice(0, 74) + '...' : data.title} </h2>
        </div>
      </a>
    </Link>
  )
}