function solve(){

    class Post{
        constructor(title, content){
            this.title = title
            this.content = content
        }

        toString(){
            return `Post ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {}

    class BlogPost extends Post {
        constructor(title, content, views){
            super(title, content)
            this.views = views
        }

        views(){
            this.views++
            return this
        }
        
        toString(){
            return super.toString()+`\nViews: ${this.views}`
        }
    }
    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

let p = solve()
let blog = new p.BlogPost('title', 'asdasd', 10)
blog.view().view().view()
console.log(" " + blog)
