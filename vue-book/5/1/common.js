var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        name: '',
        checked: false,
        bizLines: [],
        bizLine: '',
        bizLine2: '',
        bizLine3: [],
        bizLine4: 'flash',
        options: [{
            text: '快车',
            value: 'flash'
        }, {
            text: '巴士',
            value: 'bus'
        }],
        flash: {
            name: '快车'
        },
        bizLines2: []
    }
});
