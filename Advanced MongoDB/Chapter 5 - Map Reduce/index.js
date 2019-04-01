db.posts.mapReduce(
	function() {emit(this.user_id, 1); },
	
	function(key, values){return Array.sum(values)}, {
		query: {status: "active"},
		out: "post_total"
	}
).find()