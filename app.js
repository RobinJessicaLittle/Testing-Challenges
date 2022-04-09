const add = (num1, num2) => {
	return num1 + num2;
}

let name = (name) => {
	return name
}

let activityTwo = (i) => {
	return i 
}

let activityThree = () => {
	return true
}

let activityFour = () => {
	let i = {
	name: "bob",
	age: 30,
	
	}
	return i
}
	

let check = () => {
	let myList = [
	'jade',
	'james',
	'jenson',
	'bob',
	'teegan'
]

	for(let i = 0; i < myList.length; i++) {
		if(myList[i].length >5 )
	    return i
	}
}



module.exports = {
	add,
	name,
	activityTwo,
	activityThree,
	activityFour,
	check,

}