

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

fetch("data/tractatus.json")
    .then(response => response.json())
    .then(json => {

        let data = json;
        let random = getRandomInt(0, 7);


        console.log(random);
        console.log(data.children[random].content.en)

    });
