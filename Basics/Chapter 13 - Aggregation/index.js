db.newCollection.aggregate([{$group: {_id: "$by_user", description: {$sum: 1}}}])
