/* 1
Your task is to write code that will convert XML 
into a JS object and output it to the console.

XML:
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>

JS-object:
{
  list: [
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
  ]
}
*/

//1.
const parser = new DOMParser()
const xmlString = `
<list>
<student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
</student>
<student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
</student>
</list>
`

//console.log('xmlString', xmlString)

//2. Parsing XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml")

//get date DOM

const listNode = xmlDOM.querySelector('list') 
const studentsNode = listNode.querySelectorAll("student") 

const result = {list: []}

for (studentNode of studentsNode) {
const nameNode = studentNode.querySelector("name")
const firstNode = studentNode.querySelector("first") 
const secondNode = studentNode.querySelector("second") 
const ageNode = studentNode.querySelector("age") 
const profNode = studentNode.querySelector("prof") 

const langAttr= nameNode.getAttribute("lang")

//3. put to the object
result.list.push ({
    name: firstNode.textContent + " " + secondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr,
})
}
console.log('list', result)