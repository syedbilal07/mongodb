db.myCollection.save({'name': 'MyCollection'}, {$set: {'name': 'MyCollectionNew'}})
db.myCollection.find()