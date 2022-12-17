import React from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'



const NotFound: React.FC = () => {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        if (error.status === 401) {

        }

        return (
            <div id='error-page'>
                <h1>OPPS!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p>
                    <i>{error.statusText || error.status}</i>
                </p>
            </div>
          )
    }
    else {
        return (
            <>

            </>
        )
    }

  
}

export default NotFound