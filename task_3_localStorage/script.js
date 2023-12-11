
/*3
Write a script that will do the following when opening a page:
If the user logs in for the first time, display a prompt window 
with the message: “Welcome! Please enter your name."
After the user enters the name, record the name, date and time of the visit in localStorage.
Hint: Use new Date() to determine the current date.
If the user opens the page not for the first time (this can be determined 
by the presence of corresponding records in localStorage), 
display in the alert a message like: “Good afternoon, *username*! Long time no see. 
The last time you visited us was *date of last visit*” and overwrite the date of last visit.
The date can be displayed in any human-readable format 
(not Timestamp, the day, month, year and time - hours and minutes must be clearly readable).
*/

let userName = localStorage.getItem('userName');
let lastDate = localStorage.getItem('lastDate');
let lastTime = localStorage.getItem('lastTime');

if (userName) {
    // Если данные в localStorage есть - выводим их
    //1.вариант
   // alert ('Добрый день, ' + userName +'! Давно не виделись! В последний раз вы были у нас ' + lastDate + ' в ' + lastTime );
    //2.вариант
    alert(`Good afternoon, ${userName}! Haven't seen you for a long time! The last time you visited us was ${lastDate} в ${lastTime}`);
  } 
  else {
//Запишем данные в localStorage 
userName = prompt('Welcome! Please enter your name.');
localStorage.setItem('userName', userName);
} 

lastDate = new Date().toLocaleDateString()
lastTime = new Date().toLocaleTimeString();
localStorage.setItem('lastDate', lastDate);
localStorage.setItem('lastTime', lastTime);

//localStorage.clear();

