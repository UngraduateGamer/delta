let url = 'https://dog.ceo/api/breeds/image/random';

async function getData() {
    try {
        let response = await fetch(url);   // fetch API response
        let data = await response.json();  // convert to JSON
        console.log("Successfully fetched the data");
        console.log(data);
    } catch (er) {
        console.log("Error while fetching the data");
        console.log(er);
    }
}

getData();
