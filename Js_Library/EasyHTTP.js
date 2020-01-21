/***
 * 
 * EasyHTTP Library
 * Library for making HTTP Request by using Async await
 * 
 * @vectersion 2.0.0
 * @author Md Rahim Uddin
 * @license MIT
 * @description  HTTP Request by using Async await
 *  
 **/
class EasyHTTP {
    //Make an HTTP GET Request
    async get(url) {

        const response = await fetch(url)
        const responseData = await response.json();
        return responseData;

    }

    //Make an HTTP POST Request
    async post(url, data) {

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        return responseData;

    }


    //Make an HTTP PUT Request

    async put(url, data) {

        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        return responseData;

    }
    async delete(url) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
        })
        const responseData = await 'Message has deleted!!!';
        return responseData;
    }

}