

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

genTlp = () => {

    
    fetch("widgets/Tracktatus/data/tractatus.json")
        .then(response => response.json())
        .then(json => {
            
            let data = json;
            let random = getRandomInt(0, 7);

            let content = data.children[random].content.en + "<p>(TLP, " + (random + 1) + ")</p>";
            
            document.querySelector('p.animation').classList.toggle('active');
            document.getElementById("tlp").innerHTML = content;
            
            
        })
        .finally(res => {
            setTimeout(function(){
                 document.querySelector('p.animation').classList.toggle('active');
            }, 2000);
        });
}

genTlp();
