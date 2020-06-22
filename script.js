let endpoint = "https://restcountries.eu/rest/v2/all";
let options = {
  method: "GET",
};

let ul = document.querySelector("div ul");
let h3 = document.querySelector("h3");

async function getCountries() {
  try {
    let response = await fetch(endpoint, options);
    let results = await response.json();
    console.log(results);

    results.forEach((result) => {
      const li = document.createElement("li");
      const text = document.createTextNode(result.name);

      li.appendChild(text);
      ul.appendChild(li);
    });
    h3.innerHTML = `Jumlah data: ${results.length}`;
  } catch (error) {
    console.log(error);
  }
}

getCountries();