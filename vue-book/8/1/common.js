Vue.transition('fade', {
    // 参数是对应的DOM元素
    beforeEnter: function(el) {
        el.textContent = 'beforeEnter';
        console.log('beforeEnter');
    },
    enter: function(el) {
        el.textContent = 'enter';
        console.log('enter');
    },
    afterEnter: function(el) {
        el.textContent = 'afterEnter';
        console.log('afterEnter');
    },
    enterCancelled: function(el) {

    },
    beforeLeave: function(el) {
        el.textContent = 'beforeLeave';
        console.log('beforeLeave');
    },
    leave: function(el) {
        el.textContent = 'leave';
        console.log('leave');
    },
    afterLeave: function(el) {
        el.textContent = 'afterLeave';
        console.log('afterLeave');
    },
    leaveCancelled: function(el) {

    }
});

Vue.transition('bounce', {
    enterClass: 'bounceInLeft',
    leaveClass: 'bounceOutRight'
});

Vue.transition('fade2', {
    css: false,
    enter: function(el, done) {
        $(el)
            .css('opacity', 0)
            .animate({
                opacity: 1
            }, 1000, done);
    },
    enterCancelled: function(el) {
        $(el).stop();
    },
    leave: function(el, done) {
        $(el)
            .animate({
                opacity: 0
            }, 1000, done)
    },
    leaveCancelled: function(el) {
        $(el).stop();
    }
});

Vue.transition('stagger', {
    stagger: function(index) {
        console.log(Math.min(300, index * 50));
        // 设置大点看得出效果
        return Math.max(300, index * 500);
    }
});

var items = [];
for (var i = 0; i < 10; i++) {
    items.push({
        text: i
    });
}

var app = new Vue({
    el: '#app',
    data: {
        msg: 'hello world',
        show: true,
        transitionName: 'fade',
        items: items,
        text: ''
    }
});
