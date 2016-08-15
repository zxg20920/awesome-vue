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
