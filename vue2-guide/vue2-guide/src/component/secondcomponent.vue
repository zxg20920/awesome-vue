<template>
    <div id="secondcomponent">
        <h1>I am anohter page</h1>
        <a>written by {{author}}</a>
<!--         <ul>
            <li v-for="article in articles">
                {{article.title}}
            </li>
        </ul> -->
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <h1 style="line-height:36px;color:#20a0ff">豆瓣电影排行榜</h1>
            </div>
            <div v-for="article in articles" class="text-item">
                {{article.title}}
            </div>
        </el-card>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                articles:[],
                author:'tang',
            }
        },
        mounted:function(){
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10',{

            },{
                headers:{

                },
            emulateJSON:true
            }).then(function(res){
                this.articles = res.data.subjects;
            },function(res){
                console.log(res);
            })
        }
    }
</script>
