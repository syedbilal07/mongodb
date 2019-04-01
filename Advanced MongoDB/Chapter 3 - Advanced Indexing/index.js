//db.users.ensureIndex({"address.city":1,"address.state":1,"address.pincode":1})
db.users.find({"address.city":"Los Angeles","address.state":"California",
   "address.pincode":"123"})