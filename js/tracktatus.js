/*********************
>
>  Tracktatus.js
>  Author: Renato Leme
>
******************** */

genTlp = (config) => {

    const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const path = config == undefined ? "/" : config.datapath;
    const elid = config.id;
    const index = getRandomInt(0, 7);

    fetch(path)
        .then(response => response.json())
        .then(json => {
            
            const data = json;
            const content = data.children[index].content.en + "<p>(TLP, " + (index + 1) + ")</p>";
            
            document.getElementById(elid).innerHTML = content;
            
        });
}
