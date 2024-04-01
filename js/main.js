new Vue({
    el: '#app',
    data: {
        songs: [],
        selectedSong: null,
        loading: true
    },
    mounted() {
        fetch('http://localhost:8000/songs')
            .then(response => response.json())
            .then(data => {
                this.songs = data;
                this.loading = false;
            })
            .catch(error => {
                console.error('Error fetching songs:', error);
                this.loading = false;
            });
    },
    methods: {
        selectSong(song) {
            this.selectedSong = song;
        }
    }
});
