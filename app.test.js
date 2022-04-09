let funcs = require('./app.js')

describe('testing my add function',()=> {
    test("should exual 5 when pass 2 and 3", () => {
    expect(funcs.add(2,3)).toBe(5);
})
    test("should not equal 6 when pass 2 and 3", () => {
	expect(funcs.add(2,3)).not.toBe(6)
})

})

// notes from lecture above... activities below......

// Activity 1 , result should not be nul.--------


test('should not return null', () => {
	expect(funcs.name).not.toBeNull;
})

// Activity 2 , a value that is truthy -----------

test('truthy',() =>{
    expect(funcs.activityTwo(2)).toBeTruthy();
})

// Activity 3 , a value not to be falsy -----------
test("not falsy", () => {
    expect(funcs.activityThree(2)).not.toBeFalsy();
})

// Activity 4 -----------------------

test("activity 4", () => {
    expect(funcs.activityFour("bob")).toEqual({name: "bob", age:30});
})

// Activity 5 -----------------------

test('items in list with 6 or more characters', () =>{
  expect(funcs.check(myList)).toEqual(["jenson", "teegan"])
})
// cant get this one to work-------- ^