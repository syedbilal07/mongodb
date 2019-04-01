db.myCollection.update({'name': 'MyCollection'}, {$set: {'name': 'MyCollectionNew'}})
db.myCollection.find()