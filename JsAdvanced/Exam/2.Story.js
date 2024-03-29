class Story {
  constructor(title, creator) {
    this.title = title;
    this.creator = creator;
    this._comments = [];
    this._likes = [];
  }

  get likes() {
    if (this._likes.length <= 0) {
      return `${this.title} has 0 likes`;
    } else if (this._likes.length === 1) {
      return `${this._likes[0]} likes this story!`;
    } else {
      return `${this._likes[0]} and ${
        this._likes.length - 1
      } others like this story!`;
    }
  }
  like(username) {
    if (this._likes.includes(username)) {
      throw new Error("You can't like the same story twice!");
    }
    if (this.creator == username) {
      return "You can't like your own story!";
    }
    this._likes.push(username);
    return `${username} liked ${this.title}!`;
  }
  dislike(username) {
    if (!this._likes.includes(username)) {
      throw new Error("You can't dislike this story!");
    }
    let index = this._likes.findIndex((el) => (el == username));
    this._likes.splice(index, 1);
    return `${username} disliked ${this.title}`;
  }
  comment(username, content, id) {
    let found = this._comments.find(a => a.id == id)
    if (id == undefined || !found) {
      if (id == undefined) {
        id = this._comments.length + 1;
      }
      this._comments.push({ id, username, content, replies: [] });
      return `${username} commented on ${this.title}`;
    }
    if (found) {
      let curId = found.replies.length + 1;
      let replyId = `${id}.${curId}`;
      found.replies.push({ replyId, username, content });
      return `You replied successfully`;
    }
  }
  toString(sortingType) {
    switch (sortingType) {
      case "asc":
        this._comments.sort((a, b) => a.id - b.id)
        break;
      case "desc":
        this._comments.sort((a, b) => b.id - a.id)
        break;
      case "username":
        this._comments.sort((a, b) => a.username.localeCompare(b.username))
        break;
    }
    let result = []
    result.push(`Title: ${this.title}`)
    result.push(`Creator: ${this.creator}`)
    result.push(`Likes: ${this._likes.length}`)
    result.push(`Comments:`)
    for (const line of this._comments) {
      result.push(`-- ${line.id}. ${line.username}: ${line.content}`)
      if(line.replies.length > 0){
        switch (sortingType) {
          case "asc":
            line.replies.sort((a, b) => a.replyId - b.replyId)
            break;
          case "desc":
            line.replies.sort((a, b) => b.replyId - a.replyId)
            break;
          case "username":
            line.replies.sort((a, b) => a.username.localeCompare(b.username))
            break;
        }
        for (const current of line.replies) {
         result.push(`--- ${current.replyId}. ${current.username}: ${current.content}`)
        }
      }
    }
    return result.join('\n').trim()
  }
}
let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log();
console.log(art.toString("username"));
console.log();
art.like("Zane");
console.log(art.toString("desc"));
/*
John likes this story!
My Story has 0 likes
Ammy commented on My Story
You replied successfully
Title: My Story
Creator: Anny
Likes: 0
Comments:
-- 2. Ammy: New Content
-- 3. Jessy: Nice :)
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply
Title: My Story
Creator: Anny
Likes: 1
Comments:
-- 3. Jessy: Nice :)
-- 2. Ammy: New Content
-- 1. Sammy: Some Content
--- 1.2. SAmmy: Reply@
--- 1.1. Zane: Reply
*/
