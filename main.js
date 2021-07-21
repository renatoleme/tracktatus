const Tracktatus = {
    data() {
        return {
            tlp_en : "",
            tlp_de : "",
            tlp_lang: "de",
            refresh: false,
            tlpBox: {
                margin: '20px',
                padding: '4px',
                background: 'black',
                color: 'white',
                overflow: 'hidden'
            },
            tlpRefresh: {
                marginLeft: 'auto'
            },
            tlpSelectors: {
                display: 'flex',
                justifyContent: 'flex-start'
            },
        }
    },
    template:
        `<div :style="tlpBox">
            <div :style="tlpSelectors">
                <button v-on:click="changeLang('de')">de</button>
                <button v-on:click="changeLang('en')">en</button>
                <div :style="tlpRefresh">
                    <button v-on:click="getTlp">Refresh</button>
                </div>
            </div>
           <transition name="tlp">
           <div v-if="refresh">
                <p v-if="tlp_lang === 'de'" v-html="tlp_de"></p>
                <p v-else v-html="tlp_en"></p>
           </div>
           <div v-else>
                <p v-if="tlp_lang === 'de'" v-html="tlp_de"></p>
                <p v-else v-html="tlp_en"></p>
           </div>
           </transition>
         </div>`,
    mounted() {
            this.refresh = !this.refresh;

    },
    created: function () {
        this.getTlp();
    },
    methods: {
        changeLang(lang) {
            this.tlp_lang = lang;
        },
        getRandomInt (min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        },
        getTlp() {

            this.refresh = !this.refresh;
            const index = this.getRandomInt(0, 7);

            fetch('data/tractatus.json')
                .then(response => response.json())
                .then(json => {

                    const data = json;

                    const content_de = data.children[index].content.de + "<p>(TLP, " + (index + 1) + ")</p>";
                    const content_en = data.children[index].content.en + "<p>(TLP, " + (index + 1) + ")</p>";

                    this.tlp_de = content_de;
                    this.tlp_en = content_en;

                });
        }
    }
}
