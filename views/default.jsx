const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel='stylesheet'  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
                <link rel='stylesheet' href='/css/style.css'></link>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}

                
            </body>
            <footer>
                <nav class="navbar sticky-bottom bg-body-tertiary">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="#">Sticky bottom</a>
                        </div>
                </nav>
            </footer>

        </html>
    )
  }
  

module.exports = Def