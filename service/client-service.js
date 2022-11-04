// CREATE
const newClient = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            name: nome,
            email : email
        })
    })
    .then( response => {
        if (response.ok){
            return response.body
        }
        throw new Error("It's not possible to create the new client")
    })
}

// General GET --> READ
const clientsList = () => {
    /*
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/profile');
        
        http.onload = () => {
            if (http.status >= 400){
                reject(JSON.parse(http.response));
            } else {
                resolve(JSON.parse(http.response));
            }
        }
        http.send();
    });
    return promise;*/
    return fetch(`http://localhost:3000/profile`)
    .then( response => {
        if (response.ok){
            return response.json();
        }
        throw new Error("It's not possible to list the clients")
    })
} 

// Specific GET --> READ
const detailClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( response => {
        if (response.ok){
            return response.json();
        }
        throw new Error("It's not possible to edit the client informations")
    })
}

// UPTADE
const uptadeDataClient = (id, name, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify({
            name: name,
            email : email
        })
    })
    .then( response => {
        if (response.ok){
            return response.json();
        }
        throw new Error("It's not possible to uptade the client informations")
    })
}

// DELETE
const removeClient = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then( response => {
        if (!response.ok){
            throw new Error("It's not possible to remove the client")
        }
    })
}

export const clientService = {
    newClient,   // Create
    clientsList, // General Read
    detailClient, // Specific Read
    uptadeDataClient, //Uptade
    removeClient // Delete
}
