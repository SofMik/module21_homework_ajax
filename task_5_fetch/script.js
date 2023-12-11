/* 5.
Write code for an application whose interface
consists of an input field and a “Get task list” button. 
When the button is clicked, you need to send a request
 using fetch to the URL https://jsonplaceholder.typicode.com/users/3/todos. 
 The number 3 represents the user id; you need to substitute
the number entered in the input. If a user with this id exists, 
a list of tasks for this user will be returned, each task represented by an object of the form:
{
     "userId": 3,
     "id": 43,
     "title": "tempore ut sint quis recusandae",
     "completed": true
}
Where title is a description of the task, 
and completed is a flag indicating whether
 the task has been completed or not. Display this list on the page, 
 formatting it accordingly: in the form of a list (ul or ol), 
 completed tasks should be written in strikethrough text. 
 If the user with the entered id does not exist, display the following message:
"The user with the id was not found."
*/

//document.querySelector('#number').addEventListener('submit', function (e) {
document.querySelector('#number').addEventListener('change', function (e) {
    //получает текущее значение элемента с id number и сохраняет его в переменной userId
    let userId = document.querySelector('#number').value;
   // console.log(userId)
    let p = document.createElement('p');
    // Установка текстового содержимого элемента p равным значению userId
    p.textContent = userId;
    // Добавление элемента p в body документа
    document.body.appendChild(p);

    const btn = document.querySelector('.main_btn');
    btn.addEventListener('click', () => {
        if (!userId) {
            console.log('The user with the id is not found');
        } else {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
            .then(response => response.json())
            .then(json => {
                if (json.length === 0) {
                    //1. выводит в новый html
                    //document.write('The user with the id is not found./Пользователь с указанным id не найден.');
                    p.textContent = 'The user with the id ' + userId + ' is not found';
                } else {
                  //  console.log(json);
                    let ul = document.createElement('ul');
                    json.forEach(task => {
                        let li = document.createElement('li');
                        li.textContent = task.title;
                        if (task.completed) {
                            li.style.textDecoration = 'line-through';
                        }
                        ul.appendChild(li);
                    });
                    document.body.appendChild(ul);
                }
            })
            .catch(error => console.error('Error:', error));
        }  
    });
    document.querySelector('#number').value = "";
});






