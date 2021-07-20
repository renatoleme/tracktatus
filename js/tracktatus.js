

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

genTlp = () => {

    console.log(window.href)
    
    fetch("widgets/Tracktatus/data/tractatus.json")
        .then(response => response.json())
        .then(json => {
            
            let data = json;
            let random = getRandomInt(0, 7);

            let content = data.children[random].content.en + "<p>(TLP, " + (random + 1) + ")</p>";

            $('.animation').classList.toggle('active');
            $('#tlp').innerHTML = content;
            $('.animation').classList.toggle('false');

            
        });
}

genTlp();
