//db.posts.ensureIndex({post_text:"text"})
db.posts.find({$text: {$search:"tutorialspoint"}})