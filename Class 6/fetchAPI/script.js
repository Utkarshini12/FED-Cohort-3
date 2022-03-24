const getCovidData = async() => {
    const request = await fetch("https://covid19.mathdro.id/api");
    const data = await request.json();
    console.log(data);
    return data; 
}

getCovidData().then(covidData => {
    document.getElementById("total-cases").innerHTML = covidData.confirmed.value;
})

