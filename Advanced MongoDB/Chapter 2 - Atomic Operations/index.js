db.products.findAndModify({
	query: {_id:2, product_available: {$gt:0}},
	update:{
		$inc: {product_available: -1},
		$push: {product_bought_by: {customer:"Bilal",date:"10 October 2017"}}
	}  
})