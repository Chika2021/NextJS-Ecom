
type User = {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
            "lat": string,
            "lng": string
        }
    },
    "phone": string,
    "website": string,
    "company": {
        "name": string,
        "catchPhrase": string,
        "bs": string
    }
}

type Product = {
    "_id": number,
    "title": string,
    "price": number,
    "previousPrice": number,
    "description": number,
    "category": string,
    "image": string,
    "isNew": boolean,
    "brand": string,
    "quantity": number
}