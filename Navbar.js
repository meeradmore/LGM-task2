import React from 'react'

export default function Navbar( {getUsers} ) {

    return(
        <div classNmae="nav">
            <h1>More Meera</h1>
            <div className="nav-btn" onClick={getUsers}>
                <h1>Get Users</h1>
            </div>
        </div>
    )
}