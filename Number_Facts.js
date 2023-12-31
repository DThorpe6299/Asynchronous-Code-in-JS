let baseURL = "http://numbersapi.com/";
let favNum = 7;

$.getJSON(`${baseURL}/${favNum}?json`).then(data=> {
    console.log(data)
});

numList = [3, 7, 9, 6]
$.getJSON(`${baseURL}/${numList}?json`).then(data =>{
    console.log(data)
});

Promise.all(
    Array.from({ length: 4 }, () => {
      return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
  ).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
  });
  