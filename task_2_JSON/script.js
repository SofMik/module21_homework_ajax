/* 2
Given is a sample JSON string:
{"name":"Anton","age":36,"skills":["Javascript","HTML","CSS"],"salary":80000}
Your task is to create a JS object that, 
when converted to JSON, will return the same JSON string 
as the result as in the sample. Print the resulting line to the console.
*/

let person = {
    "name": "Anton",
    "age": 36,
    "skills": ["Javascript", "HTML", "CSS"],
    "salary": 80000
};

let jsonString = JSON.stringify(person);
console.log(jsonString);
