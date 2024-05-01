const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const requestOptions = {
 method: "POST",
 headers: myHeaders,
};

fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
 .then((response) => response.text())
 .then((result) => console.log(result))
 .catch((error) => console.error(error));