import Link from 'next/link'

function Home(){
  return(
    <center>
      <h1>
        NextJs-Pre-Rendering
      </h1>
      <Link href = '/users'> 
      <a>
        Users
      </a>
      </Link>
    </center>
  )
}

export default Home