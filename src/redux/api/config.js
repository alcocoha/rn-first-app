const APPLICATION = 'application/json';

const headers = {
    'Accept'       : APPLICATION,
    'Content-Type' : APPLICATION,
    "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	"x-rapidapi-key" : "e4e60d60c4msheb7c0f9f29fda81p16e307jsn9519015b6515"
}

export const GET = () => ({
    method : 'GET',
    headers,
    mode   : 'cors',
})

export const POST = ( body = {} ) => ({
    method : 'POST',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})

export const DELETE = ( body = {} ) => ({
    method : 'DELETE',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})

export const PUT = ( body = {} ) => ({
    method : 'PUT',
    headers,
    mode   : 'cors',
    body   : JSON.stringify(body)
})
