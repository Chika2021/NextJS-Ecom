import React from 'react'

export default async function getAllProducts() {

    const res = await fetch('https://jsonserver.reactbd.com/phone')

    if(!res.ok)
        throw new Error('Error Fetching User')

    return res.json()

}
