const app = Vue.createApp({
    data() {
        return {
            isWindowMoving: false,
            diffX: 0,
            diffY: 0
        }
    },
    methods: {
        minimizeWindow() {
            console.log('[main.js] Tracktatus')
            this.$refs.vtasks
            this.$emit('caraio')
            this.$el.parentNode.appendChild(this.$refs.container);
        },
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
