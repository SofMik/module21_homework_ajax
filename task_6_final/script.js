/* 6.
Write application code whose interface consists of two inputs and a button. In input you can enter any number.
The title of the first input is “page number”.
The title of the second input is “limit”.
The title of the button is “request”.
When you click the button, the following happens:
If the number in the first input does not fall into the range from 1 to 10 or is not a number, the text “Page number is outside the range from 1 to 10” is displayed below;
If the number in the second input does not fall into the range from 1 to 10 or is not a number, the text “Limit outside the range from 1 to 10” is displayed below;
If both the first and second inputs are not in ranges or are not numbers, the text “Page number and limit outside the range from 1 to 10” is displayed below;
If the numbers fall in the range from 1 to 10, make a request using the URL https://picsum.photos/v2/list?page=1&limit=10, where the GET parameter page is the number from the first input, and the GET parameter limit is this is the entered number of the second input.
Example: if the user entered 5 and 7, then the request will look like https://picsum.photos/v2/list?page=5&limit=7.
After receiving the data, display a list of pictures on the screen.
If the user reloaded the page, then he should be shown images from the last successfully completed request (use localStorage).
*/

function getData() {  
    let btn = document.querySelector('#btn');
    btn.addEventListener('click', function() {
        let number = parseInt(document.querySelector('#number').value);
        let limit = parseInt(document.querySelector('#limit').value);
        let p = document.createElement('p');
    
        if ((isNaN(number) || number < 1 || number > 10) && (isNaN(limit) || limit < 1 || limit > 10)) {
         //   console.log('Page number and limit outside the range from 1 to 10');
            p.textContent = 'Page number and limit outside the range from 1 to 10';
        } else if (isNaN(limit) || limit < 1 || limit > 10) {
         //   console.log('Limit outside the range from 1 to 10');
            p.textContent = 'Limit outside the range from 1 to 10';
        } else if (isNaN(number) || number < 1 || number > 10) {
           // console.log('Page number is outside the range from 1 to 10');
            p.textContent = 'Page number is outside the range from 1 to 10';
        } else {
            //console.log('ок');
            const options = {
                method: 'GET',
            }
            fetch(`https://picsum.photos/v2/list?page=${number}&limit=${limit}`, options)
        
            .then(response => response.json())
            .then(json => {
                console.log(json);
                localStorage.setItem('data', JSON.stringify(json));
                printData(json)
            })
            .catch(error => console.error('Error:', error));
        }
    document.body.appendChild(p);
    //console.log('number ' + number);   
    //console.log('limit ' + limit); 
    document.querySelector('#number').value = "";
    document.querySelector('#limit').value = "";
    });
}

function printData(data) {
    data.forEach(item => {
        let img = document.createElement('img');
        img.src = item.download_url;
        document.body.appendChild(img);
    })
}

let data = localStorage.getItem('data');
if (data) {
    console.log(JSON.parse(data));
    printData(JSON.parse(data)) ;
  } 
else {
    getData()
}

getData()

