db.posts.find({post_text:{$regex:"tutorialspoint",$options:"$i"}})