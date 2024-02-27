const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet Bro!
        </h3>
    )
    let rating = (
        <h3 className='inactive'>
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        let sumRating = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.round(sumRating / data.place.comments.length)
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
            stars += '⭐'
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
        comments = data.place.comments.map(c => {
          return (
            <div className="border">
              <h2 className="rant">{c.rant ? 'Rant! 🤬 ' : 'Rave! 😻'}</h2>
              <h4>{c.content}</h4>
              <h3>
                <stong>- {c.author}</stong>
              </h3>
              <h4>Rating: {c.stars}</h4>
              <form method='POST' action={`/places/comment/${c.id}?_method=DELETE`}>
                <input type="submit" className='btn btn-danger' value="Delete Comment"></input>
              </form>
            </div>
          )
        })
    }




    
    const cuisinesBadges = data.place.cuisines.split(',').map((cuisine) => {
        return <span key={cuisine} className='badge rounded-pill text-bg-info me-2'> {cuisine}</span>
    })
    return (
        <Def>
          <main className='container text-center'>
            <div className='row align-items-start'>
                <div className='col'>
                    <img src={data.place.pic} alt={data.place.name}/>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col">
                    <h1>{data.place.name}</h1>
                    <h2>
                        {rating}
                    </h2>
                    <p>{cuisinesBadges}</p>
                    <p className='badge rounded-pill text-bg-info me-2'>{`${data.place.city}, ${data.place.state}`}</p> 
                    <h2>Description</h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>
                    <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                        Edit
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                        </svg>
                        </a>
                        <form method= "POST" action={`/places/${data.place.id}?_method=DELETE`}>
                        <button type='submit' className='btn btn-danger'>
                            Delete
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                        </button>
                    </form>
                </div>
            </div>
            {/* <div className='col'>

            </div> */}

            <div className='row'>
                <div className='form-group col-sm-12'>
                    <h2>Comments</h2>
                    {comments}
                </div>
            </div>
            <h2>Got Your own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method='POST'>
                <div className='row'>
                    <div className='form-group col-sm-12'>
                        <label htmlFor='content'>Content</label>
                        <textarea id='content' name='content' className='form-control'></textarea>
                    </div>
                </div>
                <div className='row'>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='author'>Author</label>
                        <input id='author' name='author' className='form-control'></input>
                    </div>
                    <div className='form-group col-sm-4'>
                        <label htmlFor='stars'>Star Rating</label>
                        <input type='range' step="0.5" min="1" max="5" id="stars" name='stars' className='form-control'></input>
                    </div>
                    <div className='form-group col-sm-1'>
                        <label htmlFor="rant" className='mt-4'>Rant?</label>
                        <input type="checkbox" id="rant" name="rant" className="form-check-input mt-4"></input>
                    </div>
                </div>
                <input type='submit' className='btn btn-primary' value="Add Comment"></input>
            </form>
          </main>
        </Def>
    )
}

module.exports = show

