# 交互

# Interactivity

在本章，我们将会创建和扩展之前的例子，学习一些关于“方法”，“事件处理”和“计算属性”的新东西。我们将使用不同的方法开发一些例子。让我们来看看我们怎么使用Vue的交互来创建一个小的app，像计算器，运行起来非常好和简单

In this chapter, we are going to create and expand previous examples, learn new things concerning
‘methods’, ‘event handling’ and ‘computed properties’. We will develop a few examples using
different approaches. It’s time to see how we can implement Vue’s interactivity to get a small app,
like a Calculator, running nice and easy.

## 事件处理

## Event handing

HTML事件是发生在HTML元素上的。当vue在HTML页面使用的时候，可以获取到那些事件

HTML events are things that happen to HTML elements. When Vue.js is used in HTML pages, it
can react to these events.

在HTML里面，事件可以代表任何发生在渲染模型的基础的用户交互

In HTML, events can represent everything from basic user interactions to things happening in the
rendering model.

下面是一些HTML的事件示例：

These are some examples of HTML events:

* 网页页面完成加载

* A web page has finished loading

* 一个输入框发生了变化

* An input field was changed

* 一个按钮被点击了

* A button was clicked

* 一个表格提交了

* A form was submitted

事件处理的含义就是事件发生的时候你去处理一些事情

The point of event handling is that you can do something whenever an event takes place.

在Vue.js，监听DOM事件你可以使用v-on指令

In Vue.js, to listen to DOM events you can use the v-on directive.

v-on指令把绑定事件监听器给一个函数。事件的类型是由参数决定的，比如v-on:keyup监听keyup事件

The v-on directive attaches an event listener to an element. The type of the event is denoted by the
argument, for example v-on:keyup listens to the keyup event.

keyup事件发生在用户释放一个按键的时候。你可以在[这里](http://www.w3schools.com/tags/ref_eventattributes.asp)看到一个完整的HTML事件列表

The keyup event occurs when the user releases a key. You can find a full list of HTML
events [here](http://www.w3schools.com/tags/ref_eventattributes.asp)

### 行内处理事件

### Handling Events Inline

说的够多的了，让我们在实战中看看事件处理。下面，会有一个"upvote"的按钮，在每次点击的时候可以提交对应项目的upvotes数量

Enough with the talking, let’s move on and see event handling in action. Below, there is an ‘Upvote’
button which increases the number of upvotes every time it gets clicked.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <button v-on:click="upvotes++">
                Upvote!{{upvotes}}
            </button>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                upvotes: 0
            }
        });
        </script>
    </body>

    </html>

正如你上面所看到的，我们有一些简单的初始化，我们在视图模型中使用.container类。在我们的数据中有一个upvotes变量。在这里，我们绑定了一个click事件监听器，它就在v-on:click的右边。在括号里门，我们简单地使用增量运算符(upvotes++)在按钮每次点击的时候增加1.

As you can see above, we have a basic setup and this time we use the class container in our view
model. There is an upvotes variable within our data. In this case, we bind an event listener for
click, with the statement that is right next to it. Inside the quotes we’re simply increasing the count
of upvotes by one, each time the button is pressed, using the increment operator (upvotes++).

上面展示的就是一个简单的行内javascript语句。

Shown above is a very simple inline JavaScript statement

### 使用方法来处理事件

### Handling Events using Methods

现在我们使用方法来做和上面完全一样的事情。在Vue.js里面，方法是用来执行一些特定任务的方法。要执行一个方法，你必须定义然后调用它。

Now we are going to do the exact same thing as before, using a method instead. A method in Vue.js
is a block of code designed to perform a particular task. To execute a method you have to define it
and then invoke it.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <button v-on:click="upvote">
                Upvote!{{upvotes}}
            </button>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                upvotes: 0
            },
            // 在methods对象下定义方法
            // define methods under the **`methods`** object
            methods: {
                upvote: function() {
                    // 在方法里面的this指代Vue实例
                    // // **`this`** inside methods points to the Vue instance
                    this.upvotes++;
                }
            }
        });
        </script>
    </body>

    </html>

我们把一个点击事件监听器绑定了一个叫做upvote的方法。它和前面的工作一样，但是在阅读你的代码的时候更加工整和简单来理解它们

We are binding a click event listener to a method named ‘upvote’. It works just as before, but cleaner
and easier to understand when reading your code.

事件处理器严格的只能执行一个语句

Event handlers are restricted to execute one statement only.

### v-on缩写版本

### Shorthand for v-on

当你在项目中都使用v-on的时候，你会发现你的HTML很快就变得很脏。幸运的是，v-on有一个缩写的版本，`@`符号。`@`代表整个v-on:指令，使用它的时候代码看起来更加的干净。但是每个人都有它们自己的实践，这完全是可选的。

When you find yourself using v-on all the time in a project, you will find out that your HTML will
quickly becomes dirty. Thankfully, there is a shorthand for v-on, the @ symbol. The @ replaces the entire v-on: and when using it, the code looks a lot cleaner, but everyone has their own practices
and this is totally optional.

使用压缩版本，前面的实例按钮会变成这样：

Using the shorthand the button of our previous example will be:

使用v-on监听click

Listening to ‘click’ using v-on:

    <button v-on:click="upvote">
        Upvote!{{upvotes}}
    </button>

使用@缩写版本监听click

Listening to ‘click’ using @ shorthand

    <button @:click="upvote">
        Upvote!{{upvotes}}
    </button>

## 事件修饰符

## Event Modifiers

我们继续，接下来创建一个计算器应用。为了达到这个目的，我们使用一个带有两个input输入框和一个选择我们希望的操作符的选择框的表格

Now we will move on and create a Calculator app. To do so, we gonna use a form with two inputs
and one dropdown to select the desired operation.

即使下面的代码看起来是好的，但是我们的计算器没有像我们预期的一样工作

Even though the following code seems fine, our calculator does not work as expected

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <h1>Type 2 numbers and choose operation.</h1>
            <form class="form-inline">
                <!-- 注意到这里传入了一个number的属性，希望我们传入input的值是一个数字 -->
                <!-- Notice here the special attribute 'number' is passed in order to parse inputs as numbers.-->
                <input number v-model="a" class="form-control">
                <select v-model="operator" class="form-control">
                    <option selected>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <!-- 注意到这里传入了一个number的属性，希望我们传入input的值是一个数字 -->
                <!-- Notice here the special attribute 'number' is passed in order to parse inputs as numbers.-->
                <input number v-model="b" class="form-control">
                <button class="btn btn-primary" type="submit" @click="calculate">Calculate</button>
            </form>
            <h2>Result: {{a}}  {{operator}}  {{b}} = {{c}}</h2>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                a: 1,
                b: 2,
                c: null,
                operator: ''
            },
            methods: {
                calculate: function() {
                    switch (this.operator) {
                        case "+":
                            this.c = this.a + this.b;
                            break;
                        case "-":
                            this.c = this.a - this.b;
                            break;
                        case "*":
                            this.c = this.a * this.b;
                            break;
                        case "/":
                            this.c = this.a / this.b;
                            break;
                    }
                }
            }
        });
        </script>
    </body>

    </html>

如果你尝试运行这段代码，你会发现每当calculate按钮被点击的时候，它会重新加载页面而非计算。

If you try and run this code yourself, you will find out that when the “calculate” button is clicked,
instead of calculating, it reloads the page.

这是有意义的，当你点击calculate的时候，在后台，你提交了表格所以页面重新加载了。

This makes sense because when you click “calculate”, in the background, you are submitting the
form and thus the page reloads.

为了防止表格的提交，我们必须取消onsubmit事件的默认行为。这是一个很常见的需求：在我们的事件处理器方法里面调用`event.preventDefault()`。在我们的例子中事件处理器方法叫做calculate

To prevent the submission of the form, we have to cancel the default action of the onsubmit event. It
is a very common need to call event.preventDefault() inside our event handling method. In our
case the event handling method is called calculate.

所以，我们的方法会变成这样：

So, our method will become:

    calculate: function() {
        event.preventDefault();
        switch (this.operator) {
            case "+":
                this.c = this.a + this.b;
                break;
            case "-":
                this.c = this.a - this.b;
                break;
            case "*":
                this.c = this.a * this.b;
                break;
            case "/":
                this.c = this.a / this.b;
                break;
        }
    }

尽管我们可以在方法里面这样简单的书写，这样会更加好：方法是纯粹的代码逻辑处理，而不应该有处理DOM事件的细节。

Although we can do this easily inside methods, it would be better if the methods can be purely
ignorant about data logic rather than having to deal with DOM event details.

(译者注：下面的内容是原著的，但是内容有错误。.stop并不是阻止事件默认的行为而是阻止冒泡，所以下面的例子中如果添加.stop的话，页面还是会刷新。请注意一下。)

Vue.js会给v-on提供两个事件修饰符来住址事件的默认行为

Vue.js provides two event modifiers for v-on to prevent the event default behavior:

* .prevent

* .stop

所以，使用他们我们的提交按钮会改变表格：

So, using one of them, our submit button will change from:

    <button class="btn btn-primary" type="submit" @click="calculate">Calculate</button>

    to:

    <button type="submit" @click.prevent="calculate">Calculate</button>

    or:

    <button type="submit" @click.stop="calculate">Calculate</button>

我们现在可以安全的移除在calculate方法里面的`event.preventDefault()`语句了

And we can now safely remove event.preventDefault() from our calculate method

## 键修饰符

## key modifiers

如果你在其中一个正在聚焦的input输入框敲击enter键的时候，你会发现页面又重新加载而不是计算。这是因为我们禁止了提交按钮的默认行为，而没有禁止input输入框的默认行为（译者注：发现enter的时候并没有刷新页面，而是正常计算）

If you hit enter when you are focused in one of the inputs, you will notice that the page reloads
again instead of calculating. This happens because we have prevented the behavior of the submit
button but not of the inputs.

为了修复它，我们必须使用'键修饰符'

To fix this, we have to use ‘Key Modifiers’

    <input v-model="a" @keyup.enter="calculate">

    <input v-model="b" @keyup.enter="calculate">

如果你一个表格里面有非常多的input输入框，按钮和其他你需要禁止他们默认的提交行为，你可以修改form表格的提交事件。比如：`<form @submit.prevent=”calculate”>`

When you have a form with a lot of inputs/buttons/etc and you need to prevent their
default submit behavior you can modify the submit event of the form. Example: `<form @submit.prevent=”calculate”>`

最终，计算器很好地运行了起来

Finally, the calculator is up and running.

## 计算属性

## Computed Properties

Vue.js的行内表达式非常方便，但是对于那些更加复杂的逻辑，你应该使用计算属性。实际上，计算属性是一种它们的值依赖于其他因素的变量。

Vue.js inline expressions are very convenient, but for more complicated logic, you should use
computed properties. Practically, computed properties are variables which their value depends on
other factors.

计算属性看起来像函数，但是你可以把它们作为属性来应用。但是有一个显著的区别，每当计算属性依赖的因素变化的时候，计算属性的值会重新被计算

Computed properties work like functions that you can use as properties. But there is a significant
difference, every time a dependency of a computed property changes, the value of the computed
property re-evaluates.

在Vue.js里面，你可以在Vue实例里面的computed对象里面定义计算属性

In Vue.js, you define computed properties within the computed object inside your Vue instance.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            a={{a}},b={{b}}
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                a: 1
            },
            computed: {
                // a computed getter
                b: function() {
                    // this指向Vue实例
                    // **`this`** points to the Vue instance
                    return this.a + 1;
                }
            }
        });
        </script>
    </body>

    </html>

This is a basic example demonstrating the use of computed properties. We’ve set two variables, the
first, a, is set to 1 and the second, b, will be set by the returned result of the function inside the
computed object. In this example the value of b will be set to 2.
