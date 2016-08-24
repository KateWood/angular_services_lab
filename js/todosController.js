angular.module('todosApp')
	.controller('TodosController', TodosController)

function TodosController($log) {
	var self = this
	self.add = addTodo
	self.newTodo = {description: "", completed: false, image: ""}
	self.leftToDo = leftToDo

	self.all = [
		{description: "feed the cat", completed: true, image: "http://www.catster.com/wp-content/uploads/2015/06/cat-eats-steak.jpg"},
		{description: "stake some vamps", completed: false, image: "http://vignette3.wikia.nocookie.net/buffy/images/2/2f/Buffy_staking_vampire_tabula_rasa.gif/revision/latest?cb=20140118003318"},
		{description: "buy a new dress", completed: true, image: "http://all-womens-dresses.com/wp-content/uploads/2015/11/black-and-white-polka-dot-dress-1.jpg"},
		{description: "quit smoking", completed: false, image: "http://pics.clipartpng.com/No_Smoking_Sign_PNG_Clipart-833.png"},
		{description: "be awesome", completed: true, image: "http://www.quotesvalley.com/images/23/when-im-sad-i-stop-being-sad-and-be-awesome-instead.jpg"}
	]

	$log.log(self.all)

	function addTodo() {
		self.all.push(self.newTodo)
		self.newTodo = {description: "", completed: false, image: ""}
	}

	function leftToDo() {
		var count = 0
		self.all.forEach(function(todo){
			count += todo.completed ? 0 : 1
		})
		return count
	}
}