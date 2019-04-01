db.Tutorialspoint.find()({$or: [{"by": "tutorialspoint"}, {"title": "MongoDB Overview", }]}).pretty(){
   "title": "MongoDB Overview", 
   "description": "MongoDB is no sql database",
   "by": "tutorials point",
   "url": "http://www.tutorialspoint.com",
   "tags": ["mongodb", "database", "NoSQL"],
   "likes": "100"
}