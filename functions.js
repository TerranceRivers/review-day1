const returnEmptyString = function () {
	return "";
};

const returnZeroNumber = function () {
	return 1 * 0
};

const returnEmptyArray = function () {
	let arr = []
	return arr
};

const returnEmptyObject = function () {
	let obj = {}
	return obj
};


const returnAbcString = function (value) {
	value = 'abc123'
	return value
};

const returnSumOfTen = function (arg1, arg2) {
	return arg1 + arg2;
  };

const subtraction = function (arg1, arg2) {
	 
	return arg1 - arg2
};

const multiplication = function (arg1, arg2) {
	return arg1 * arg2
};

const division = function (arg1, arg2) {
	return arg1 / arg2
};

const returnArray = function (arg1) {
	return arg1
};

const returnFirstIndex = function (arg1) {
	return arg1[0]
};

const returnSecondIndex = function (arg1) {
	return arg1[1]
};

const returnArrayLength = function (arg1) {
	return arg1.length
};

const arraySum = function (arg1) {
	let sum = 0 
	for (let i = 0; i < arg1.length; i++){
		sum+= arg1[i]
	}
	return sum
};

const arraySubtraction = function (arg1) {
	let sub = 0 
	for (let i = 0; i < arg1.length; i++){
		sub = sub - arg1[i]
	}
	return sub
};

const multiplicationArray = function (arg1) {
	let mul = 1 
	for (let i = 0; i < arg1.length; i++){
		mul *=arg1[i]
	}
	return mul
};

const divisionArray = function (arg1, divisor) {
	let result = [];
	for (let i = 0; i < arg1.length; i++) {
	  result.push((arg1[i] / divisor).toFixed(3));
	}
	return result;
  };
  
  

const oddArray = function (arg1) {
	let odd = []
	for (let i = 0; i < arg1.length; i++){
		if (arg1[i] % 2 === 1){
			odd.push(arg1[i])
		}
	}
	return odd
}

const evenArray = function (arg1) {
	
		let even = []
		for (let i = 0; i < arg1.length; i++){
			if (arg1[i] % 2 === 0){
				even.push(arg1[i])
			}
		}
		return even
	}

const returnFruits = function (arg1) {
	let fruits = [];
	for (let i = 0; i < arg1.length; i++) {
	  if (arg1[i] === "apple") {
		fruits.push(arg1[i]);
	  }
	  if (arg1[i] === "orange") {
		fruits.push(arg1[i]);
	  }
	}
	return fruits;
  };
