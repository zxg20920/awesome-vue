var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        parentMessage: '滴滴',
        items: [{
            msg: '滴滴顺风车'
        }, {
            msg: '滴滴专车'
        }],
        users: [{
            name: '快车',
            tag: 1
        }, {
            name: '出租车',
            tag: 3
        }, {
            name: '顺风车',
            tag: 2
        }],
        searchText: '',
        field: 'tag',
        reverse: 1,
        classA: 'A',
        isB: false,
        isC: true,
        someProp: 'idName',
        otherProp: 'prop'
    }
});

// app.items.$remove({
//     msg: '滴滴顺风车'
// });
console.log(app.items.$remove(app.items[0]))


console.log(app.items.$remove);
console.log(app.items.$set);
// console.log(app.items.$add)
// console.log(app.items.$delete)
