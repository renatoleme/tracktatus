const Tracktatus = {
    data() {
        return {
            tlp_en : "",
            tlp_de : "",
            tlp_lang: "de",
            refresh: false,
            tlpBox: {
                padding: '4px',
                background: 'black',
                color: 'white',
                overflow: 'hidden',
                boxShadow: '4px 4px 16px  black',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column'
            },
            tlpRefresh: {
                marginLeft: 'auto'
            },
            tlpSelectors: {
                display: 'flex',
                justifyContent: 'flex-start'
            },
            tlpContent: {
                padding: '8px',
                fontSize: '20px',
                color: 'white'
            },
            tlpCredits: {
                marginLeft: 'auto',
                padding: '8px',
                textDecoration: 'none',
                color: 'gray'
            }
        }
    },
    template:
        `<div :style="tlpBox">
            <div :style="tlpSelectors">
                <button class="button-lang" v-on:click="changeLang('de')">de</button>
                <button class="button-lang" v-on:click="changeLang('en')">en</button>
                <div :style="tlpRefresh">
                    <button v-on:click="getTlp" class="button-refresh"><i class="fas fa-sync fa-2x"></i></button>
                </div>
            </div>
           <div :style="tlpContent">
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
           </div>

           <a :style="tlpCredits" href="https://github.com/renatoleme/tracktatus"><i>tracktatus.js</i></a>
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
        goDeep(data) {

            if (data.children.length !== 0) {
                const index = this.getRandomInt(0, Object.keys(data.children).length);
                if (index === 0) {
                    const content_de = data.content.de + "<br/>(TLP, " + data.key + ")";
                    const content_en = data.content.en + "<br/>(TLP, " + data.key + ")";
                    this.tlp_de = content_de;
                    this.tlp_en = content_en;
                }
                this.goDeep(data.children[index])
            }
            else {
                const content_de = data.content.de + "<br/>(TLP, " + data.key + ")";
                const content_en = data.content.en + "<br/>(TLP, " + data.key + ")";
                this.tlp_de = content_de;
                this.tlp_en = content_en;
            }
            
        },
        getTlp() {

            this.refresh = !this.refresh;
            
            const index = this.getRandomInt(0, 7);

            fetch('widgets/tracktatus/data/tractatus.json')
                .then(response => response.json())
                .then(json => {

                    const data = json;

                    const content_de = data.children[index].content.de + "<p>(TLP, " + (index + 1) + ")</p>";
                    const content_en = data.children[index].content.en + "<p>(TLP, " + (index + 1) + ")</p>";
                    
                    this.goDeep(data.children[index])


                });
        }
    }
}
