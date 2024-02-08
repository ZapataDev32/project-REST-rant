const React = require('react')
const Def = require('../default')

function show (data) {

    const cuisinesBadges = data.place.cuisines.split(',').map((cuisine) => {
        return <span key={cuisine} className='badge rounded-pill text-bg-info me-2'> {cuisine}</span>
    })
    return (
        <Def>
          <main className='container'>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={data.place.pic} alt={data.place.name}/>
                </div>
            </div>
            <div className='col'>
                <h1>{data.place.name}</h1>
                <p>{cuisinesBadges}</p>
            </div>
            <div className='row align-items-center'>
                <div className='col'>
                    <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                        Edit
                    </a>
                    <form method= "POST" action={`/places/${data.id}?_method=DELETE`}>
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

