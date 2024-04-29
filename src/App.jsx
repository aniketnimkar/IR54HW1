import './App.css'
import useFetch from './useFetch'

export default function App() {
  const { data, loading, error, fetchData } = useFetch('https://randomuser.me/api/')
  console.log(data)
  return (
    <main className='container mt-3'>
     <h1>Random User API</h1>
      <button className='btn btn-info mt-3' onClick={fetchData}>Get Random User</button>
      <div className="mt-3">
        {loading && <p>Loading...</p>}
        {error && <p>An error occured while making a fetch request.</p>}

        {
         data && data.results.map((user)=>(
            <div key={user.id}>
              <p><strong>Name: </strong>{user.name.first} 
 {user.name.list}</p>
              <p><strong>Email: </strong>{user.email} {user.name.list}</p>
              <p><strong>City: </strong>{user.location.city} {user.name.list}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}
