Vue.config.devtools = true;

new Vue({
    el: '#app',
    data: {
        songs: [],
        selectedSong: null,
        loading: true
        
    },
    computed: {
        sortedSongs() {
            // Sort songs alphabetically by title
            return this.songs.slice().sort((a, b) => a.title.localeCompare(b.title));
        }
    },
    mounted() {
        // Fetch songs data from the Lumen API using Fetch API
        fetch('http://localhost/Caspe_Kirk_HW3/lumen-api/public/songs')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch songs');
                }
                return response.json();
            })
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
        fetchSongDetails(id) {
            // Fetch details of the selected song using Fetch API
            fetch(`http://localhost/Caspe_Kirk_HW3/lumen-api/public/songs/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch song details');
                    }
                    return response.json();
                })
                .then(data => {
                    this.selectedSong = data;
                })
                .catch(error => {
                    console.error('Error fetching song details:', error);
                });
        }
    }
});

mount('#app');