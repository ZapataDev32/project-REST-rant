const React = require('react')
const Def = require('../default')

function show ({ place }) {

    const cuisinesBadges = place.cuisine.split(',').map((cuisine) => {
        return <span key={cuisine} className='badge rounded-pill text-bg-info me-2'> {cuisine}</span>
    })
    return (
        <Def>
          <main className='container'>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={place.pic} alt={place.name}/>
                </div>
            </div>
            <div className='col'>
                <h1>{place.name}</h1>
                <p>{cuisinesBadges}</p>
            </div>
            <div className='row align-items-center'>
                <div className='col'>
                    <a href='' className='btn btn-warning'>
                        Edit
                    </a>
                    <form action={`/places/${id}?_method=DELETE`} method='POST'>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                        </button>
                    </form>
                </div>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

