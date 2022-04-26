import React from 'react'

const Card =({user}) => {
    return (
        <div className="card">
            <img src={user.avatar} alt="" />
            <h1>{user.first_name}</h1>
            <h1>{user.last_name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default function Dashboard ({users , loading }){
    return (
        <div className="container">
            {loading && 
            <div className="loader">
                <div className="loader-bar"></div>
            </div> 
            }
            <div className="card_container">
                {users.map((user) => (<Card key={user.id} user={user}/>))}
                {users.length == 0 && <h1>Please fetch users......</h1>}
            </div>
        </div>
    )
}