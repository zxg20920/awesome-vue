# 列表渲染

# List Rendering

在这本书的第三章节，我们准备学习列表渲染。使用Vue的指令我们将会展示怎么去：

In the third chapter of this book, we are going to learn about list rendering. Using Vue’s directives
we are going to demonstrate how to:

* 渲染一个基于数组的项目列表

* Render a list of items based on an array.

* 渲染一个模板

* Repeat a template.

* 遍历一个对象的属性

* Iterate through the properties of an object.

* 过滤一个项目数组

* Filter an array of items.

* 排序一个项目数组

* Order an array of items.

* 给列表一个自定义的过滤器

* Apply a custom filter to a list.

## 安装和使用Bootstrap

## Install & Use Bootstrap

为了让我们更加容易看清我们的页面，我们准备引入Bootstrap

To make our work easier on the eye, we are going to import Bootstrap.

Bootstrap是最出名的一个HTML,CSS,JS框架，让开发者开发响应式和移动优先的网页项目

Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive,
mobile first projects on the web

前往 [http://getbootstrap.com/](http://getbootstrap.com/) 然后点击下载按钮，一开始我们仅仅从[CDN链接](https://www.bootstrapcdn.com/)获取Bootstrap来使用，但是你可以按照适合你的需求来安装它。我们的示例仅需要一个文件，css/bootstrap.min.css。当我们在我们的app里面使用这个css文件，我们能得到所有漂亮的结构和样式。仅需要在head标签头部把它引入然后你就可以很好地使用它了。

Head to [http://getbootstrap.com/](http://getbootstrap.com/) and click the download button. For the time being, we’ll just use
Bootstrap from the [CDN link](https://www.bootstrapcdn.com/) but you can install it any way that suits your particular needs. For
our example we need only one file, for now: css/bootstrap.min.css. When we use this .css file
in our app, we have access to all the pretty structures and styles. Just include it within the head tag
of your page and you are good to go.

Bootstrap需要一个容器来包含网站的内容和网格系统。你可以从下面两种container里面选择一个到你的项目中。请注意，由于存在padding和一些其他的，containers都是不可嵌套的。

Bootstrap requires a containing element to wrap site contents and house our grid system. You may
choose one of two containers to use in your projects. Note that, due to padding and more, neither
container is nestable.

* .container：响应式的固定宽度的容器 `<div class="container"> … </div>`

* Use .container for a responsive fixed width container. `<div class=”container”> … </div>`

* .container-fluid：宽度铺满整个可视范围的容器 `<div class="container-fluid"> … </div>`

* Use .container-fluid for a full width container, spanning the entire width of your viewport.`<div class=”container-fluid”> … </div>`

At this point, we would like to make an example of Vue.js with Bootstrap classes. This is the
introductory example concerning classes and many will follow. Of course, not much study or
experimentation is required in order make use of combined Vue and Bootstrap

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <h1>{{message}}</h1>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                message: 'Hello,Vue.js'
            }
        });
        </script>
    </body>

    </html>

上面展示了如何安装Bootstrap，以及简单的配置。

shown here is the installed Bootstrap and the basic set up for our stories example.

注意一下，替换了以前指向id为app的元素，我们这里在Vue实例里面指向的是类为container的元素设置为el选项的值。这样的话，我们获得了这个类上的样式和结构，可以让我们的app写起来更加的令人愉悦

Notice this time, instead of targeting app id, we have targeted the container class within the el
option inside the Vue instance. Going that way, we have gained the styles and structure that comes
along with this class and made our app a bit more delightful

很多时候我们也会使用pre标签来展示我们json格式的数据

Most of the times we are going to use the pre tag in our code to display our data in JSON
format

再上面的例子中，我们指向的是有.containe类的元素。注意了当你的指向的元素使用的是类名来查找并且这个类名的元素超过1个的时候，Vue.js只会在第一个元素上作用

In the above example we target the element with class of .container. Be careful when
you are targeting an element by class, when the class is present more than 1 time, Vue.js
will mount on the first element only.

使用 el: 你可以指向任何DOM元素。尝试下把它指向body标签而它仍然可以很好的运行

Using el: you can target any DOM element on the! Try targeting the body of your HTML
and see how that works!

## v-for

为了可以遍历一个数组里面的所有项目，我们会使用Vue的v-for指令

In order to loop through each item in an array, we will use v-for Vue’s directive.

v-for循环可以作用在数组/对象上，它可以遍历数组里面的所有项目。这个指令需要特殊的语法，一个是源数据的数组，一个是遍历数组时所对应的那个项目

The v-for loop works on arrays/objects and is used to loop through each item in an array. This
directive requires a special syntax in the form of item in array where array is the source data
Array and item is an alias for the Array element being iterated on.

如果你了解php的话你会发现v-for和php的foreach函数相似。但是注意了如果你使用foreach函数是这样的：($array as $value)

If you are coming from the php world you may notice that v-for is similar to php’s foreach
function. But be careful if you are used to foreach($array as $value).

而vue的v-for刚好相反，它是这样的：value in array

Vue’s v-for is exactly the opposite, value in array.

单数先，然后才是复数

The singular first, the plural next.

### range v-for

v-for指令也可以作用在数字上。当传入的不是数组/对象而是一个数字的话，模板会按照给的数字来重复那么多次。

Directive v-for can also take an integer. Whenever a number is passed instead of an array/object,
the template will be repeated as many times as the number given.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <h1>The multiplication table of 4.</h1>
            <ul class="list-group">
                <li class="list-group-item" v-for="i in 11">
                    {{i}} times 4 equals {{i*4}}
                </li>
            </ul>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {

            }
        });
        </script>
    </body>

    </html>

上面的代码会展示一个4的乘法表

The above code displays the multiplication table of 4.

因为我们想要展示所有的4的乘法表（一直到40），我们重复模板11次，因为i的值是从0开始的

Because we want to display all the multiplication table of 4 (until 40) we repeat the template
11 times since the first value i takes is 0.

## 数组渲染

## Array Rendering

### 循环遍历一个数组

### Loop Through an Array

在下一个例子我们会创建下面的stories数组存放我们的数据对象，并且一个接一个的展示出它们

In the next example we will set up the following array of Stories inside our data object and we will
display them all, one by one.

    stories: [
        "I crashed my car today!",
        "Yesterday, someone stole my bag!",
        "Someone ate my chocolate..."
    ]

我们需要在这里做的就是渲染出一个列表。这里指的就是，数组里面的字符。

What we need to do here, is to render a list. Specifically, an array of strings.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <h1>Let's hear some stories!</h1>
            <div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="story in stories">
                        Someone said "{{story}}"
                    </li>
                </ul>
            </div>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                stories: [
                    "I crashed my car today!",
                    "Yesterday, someone stole my bag!",
                    "Someone ate my chocolate..."
                ]
            }
        });
        </script>
    </body>

    </html>

.list-group和.list-group-item类都是bootstrap的类。[你可以在这里找到更多bootstrap的列表样式](http://getbootstrap.com/css/#type-lists)

Both list-group and list-group-item classes are Bootstrap classes. [Here you can find more information about Bootstrap list styling](http://getbootstrap.com/css/#type-lists).

使用v-for我们可以用简单的乱序列表来展示我们的stories，非常简单。

Using v-for we have managed to display our stories in a simple unordered list. It is really that easy!

### 循环遍历一个对象数组

### Loop Through an Array of Objects

现在我们把我们的Stories数组改成包含story对象。一个story对象有两个属性：plot和writer。我们会做和之前一样的事情，但是这次不会直接输出story，我们会来输出story.plot和story.writer。

Now, we change the Stories array to contain story objects. A story object has 2 properties: plot and
writer. We will do the same thing we did before but this time instead of echoing story immediately,
we will echo story.plot and story.writer respectively.

    <html>

    <head>
        <title>Hello Vue</title>
        <link rel="stylesheet" href="../../lib/bootstrap.min.css">
    </head>

    <body>
        <div class="container">
            <h1>Let's hear some stories!</h1>
            <div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="story in stories">
                        {{story.writer}} said "{{story.plot}}"
                    </li>
                </ul>
            </div>
            <pre>{{$data|json}}</pre>
        </div>
        <script src="../../lib/vue.js"></script>
        <script>
        new Vue({
            el: '.container',
            data: {
                stories: [{
                    plot: "I crashed my car today!",
                    writer: 'Alex'
                }, {
                    plot: "Yesterday,someone stole my bag!",
                    writer: 'John'
                }, {
                    plot: "Someone ate my chocolate...",
                    writer: 'John'
                }]
            }
        });
        </script>
    </body>

    </html>
