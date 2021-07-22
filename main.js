const app = Vue.createApp({
    data() {
        return {
            isWindowMoving: false,
            diffX: 0,
            diffY: 0
        }
    },
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
