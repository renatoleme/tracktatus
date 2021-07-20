

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

        let content = data.children[random].content.en;

        console.log("asdadsa");
        console.log(random);
        console.log(content)

        document.getElementById("tlp").innerHTML = content;
        

    });
