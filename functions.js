//описание функции
function calcSum(num1, num2){
	console.log(num1, num2);
	var sum = num1 +num2
	return sum;
	//return num1 + num2;
}

//вызов функции
console.log(calcSum(2, 4));

function triangle(hight, base){
	return hight * base * 0.5;
}

console.log(triangle(15, 40));
// console.log(sum); // не видит за пределами функции

function getCals(foodName, weight){
	var foodData = {
		"Гречневая каша" : 137,
		"Колбаса"        : 257,
		"Йогурт 1.5%"    : 65,
		"Кабачки"        : 30
	},
	cals         = 0
	;
		if(foodData[foodName]){
			cals = foodData[foodName] * weight / 100;

		}
		else{
			console.log("Продукт отсутствует в базе");
		}
	return cals;
	//return foodData[foodName] * weight / 100;
}
console.log(getCals("Гречневая каша", 130), "ккал");

function getDinnerCals(dinnerData){
	var foodData = { // просто список из базы данных
		"Гречневая каша"   : 137,
		"Колбаса"          : 257,
		"Йогурт 1.5%"      : 65,
		"Кабачки"          : 30,
		"Пирожное слоеное" : 543,
		"Грейпфрут"        : 37
	},
	cals         = 0;
		for (var foodName in dinnerData){
			cals += foodData[foodName] * dinnerData[foodName] / 100;
		}
		return Math.round(cals);
}

var myDinner = {
	"Гречневая каша"   : 130,
	"Колбаса"          : 100,
	"Кабачки"          : 50,
	"Грейпфрут"        : 150
};
console.log(getDinnerCals(myDinner), "ккал");

var dinnerCals = getDinnerCals(myDinner);
console.log ("Я сьел: ", dinnerCals, "ккал, вот это УЖАС!!!");

function useCalories(dinnerCals){
	var activities ={
		"Печатание на компьютере"   : 140,
		"Вытирание пыли"            : 80,
		"Езда на велосипеде"        : 300,
		"Пешая прогулка (4,2 км/ч)" : 220,
		"Чтение книг"               : 29,
		"Занятие в аудитории"       : 80 
	},
used = 0;
	for (var activName in activities){
    flag = false;
		if (activities[activName] <= dinnerCals){    
      used += activities[activName];
      dinnerCals -= activities[activName];
      flag = true;
    }
    if (flag == true){
      console.log("Использовано калорий: ", used, "ккал");
    } 
    else {
    	console.log("Недостаточно калорий для использования, только", dinnerCals, "ккал осталось")
    };
  }	
}
 useCalories(dinnerCals); //на консоль выводится все



var today = new Date;
function horoscope(id){
	var monthHoroscope = {
		"0" : {
			"Horoscope" : "All is great",
			"Planets"   : "On needed place" 
		},
		"1" : {
			"Horoscope" : "Work hard, party hard",
			"Planets"   : "Will show on time" 
		},
		"2" : {
			"Horoscope" : "Good winter month!)",
			"Planets"   : "Quite close" 
		},
		"3" : {
			"Horoscope" : "First spring month",
			"Planets"   : "Where they should be" 
		},
		"4" : {
			"Horoscope" : "Second spring month",
			"Planets"   : "Still on good place" 
		},
		"5" : {
			"Horoscope" : "Third spring month",
			"Planets"   : "Closer to Earth" 
		},
		"6" : {
			"Horoscope" : "It's Summer!!!)",
			"Planets"   : "On the needed place" 
		},
		"7" : {
			"Horoscope" : "Still Summer",
			"Planets"   : "Help you to survive" 
		},
		"8" : {
			"Horoscope" : "Last Summer month",
			"Planets"   : "Enjoy your summer" 
		},
		"9" : {
			"Horoscope" : "Warm autumn is already here",
			"Planets"   : "Are around you" 
		},
		"10" : {
			"Horoscope" : "Golden autumn - enjoy",
			"Planets"   : "Will show on time" 
		},
		"11" : {
			"Horoscope" : "Almost winter - prepare to warm up",
			"Planets"   : "On the needed place" 
		},
		"12" : {
			"Horoscope" : "Something went wrong",
			"Planets"   : "Somewhere near" 
		}
	}
	//console.log(monthHoroscope[id]);
	return monthHoroscope[id];
}
console.log("Horoscope for the current month:", horoscope(today.getMonth()+1))




