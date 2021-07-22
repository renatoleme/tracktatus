const app = Vue.createApp({
    data() {
        return {
            isWindowMoving: false,
            diffX: 0,
            diffY: 0
        }
    },
    template:
`
            <div class="container" @mousemove="mouseMove($event)" @mouseup="moveEnd">
        <h1>Tracktatus.js</h1>

     <tracktatus class="tlp-widget" ref="tbox" v-on:move-start="moveStart"/>

</div>
`,
    
    methods: {
        moveEnd() {
            this.isWindowMoving = false;
        },
        mouseMove(event) {
            if (this.isWindowMoving)
                this.$refs.tbox.moveWindow(event, this.diffX, this.diffY);
        },
        moveStart(info) {
            this.diffX = info.diffX;
            this.diffY = info.diffY;
            this.isWindowMoving = true
        }
    }
})
