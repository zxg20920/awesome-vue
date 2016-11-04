var evens = [2, 4, 6, 8];

var odds = evens.map(v => v + 1);

console.log(odds);

var nums = evens.map((v, i) => v + i);

console.log(nums);

var fives = [];

nums.forEach(v => {
    if (v % 5 === 0) {
        fives.push(v);
    }
});

console.log(fives);

var bobs = {
    _name: 'Bob',
    _friends: ['cody', 'vue'],
    printFriends() {
        this._friends.forEach(f => {
            console.log(this._name + ' knows ' + f);
        });
    }
}

console.log(bobs.printFriends());

function square() {
    let example = () => {
        let numbers = [];
        for (number of arguments) {
            numbers.push(number * 2);
        }
        console.log(numbers);
        return numbers;
    }

    return example();
}

square(2, 3, 4, 5, 6, 9.3);

// class SkinnedMesh extends THREE.Mesh {
//     constructor(geometry, materials) {
//         super(geometry, materials);

//         this.idMatrix = SkinnedMesh.defaultMatrix();
//         this.bones = [];
//         this.boneMatrices = [];
//     }
//     update(camera) {
//         super.update();
//     }

//     static defaultMatrix() {
//         return new THREE.Matrix4();
//     }
// }

console.log(`This is a pretty little template string.`)
console.log(`This is ES
	6`);

var name = "Bob",
    time = "today";

console.log(`Hello ${name},it is ${time}`);
console.log(String.raw `In ES5 "\n" is a line-feed.`);

var [a, b, c, d] = [1, 2, 3];
console.log(a, b, c, d);

function g({
    name: x
}) {
    console.log(x);
}

g({
    name: 'cody'
});

function r({
    x,
    y,
    w = 10,
    h = 10
}) {
    return x + y + w + h;
}

function r({
    x,
    y,
    w = 10,
    h = 10
}) {
    return x + y + w + h;
}
console.log(r({
    x: 10,
    y: 20
}));

function A(x, y = 12) {
    console.log(x + y);
}

A(4);

function B(x, ...y) {
    console.log(x * y.length);
}

B(4, 'cody', 'haha');

function C(x, y, z) {
    console.log(x + y + z);
}

C(...[1, 2, 3]);



let fibonacci = {
    [Symbol.iterator]() {
        let pre = 0,
            cur = 1;
        return {
            next() {
                [pre, cur] = [cur, pre + cur];
                return {
                    done: false,
                    value: cur
                }
            }
        }
    }
}
console.log(fibonacci)
for (n in fibonacci) {
    if (n > 200) {
        break;
    }
    console.log(n);
}
