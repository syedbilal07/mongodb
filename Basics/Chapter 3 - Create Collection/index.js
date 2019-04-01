use Tutorialspoint
db.createCollection("mycollection", { capped : true, autoIndexId : true, size : 6142800, max : 10000 })