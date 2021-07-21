export const getData = async() => {

    const response = await fetch('https://auth-faa20-default-rtdb.firebaseio.com/values.json');
    const obj = await response.json();

    return {
        response,
        obj
    }

};