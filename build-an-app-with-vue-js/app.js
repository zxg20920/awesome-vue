new Vue({
    el: '#events',
    data: {
        event: {
            title: '',
            description: '',
            date: ''
        },
        events: []
    },
    ready: function() {
        this.fetchEvents();
    },
    methods: {
        fetchEvents: function() {
            // var events = [{
            //     id: 1,
            //     name: 'TIFF',
            //     description: 'Toronto International Film Festival',
            //     date: '2015-09-10'
            // }, {
            //     id: 2,
            //     name: 'The Martian Premiere',
            //     description: 'The Martian comes to theatres.',
            //     date: '2015-10-02'
            // }, {
            //     id: 3,
            //     name: 'SXSW',
            //     description: 'Music, film and interactive festival in Austin, TX.',
            //     date: '2016-03-11'
            // }];
            var events = [];
            this.$http.get('/api/events')
                .then(function(events) {
                    console.log(events.data);
                    this.$set('events', events.data);
                    console.log(events);
                })
        },
        addEvent: function() {
            if (this.event.name.trim()) {
                this.$http.post('/api/events', this.event)
                    .then(function(res) {
                        this.events.push(this.event);
                        console.log('Event added!');
                    });
            }
        },
        deleteEvent: function(index) {
            if (confirm('Are you sure you want to delete this event?')) {
                this.$http.delete('/api/events/' + event.id)
                    .then(function(res) {
                        this.events.splice(index, 1);
                    })
            }
        }
    }
});
