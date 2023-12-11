
/*4 Promise
Create a Promise in which, with a delay of three seconds, 
generate a random integer from 1 to 100. To create a delay, use setTimeout. 
If the generated number is even, the Promise will be executed successfully (resolve), 
if it is odd, it will be executed with an error (reject). 
After allowing the Promise, process the result of its execution and print a message to the console:
“Completed successfully. The generated number is “number” if the Promise completed successfully. 
Instead of number, substitute the generated number
"Completed with an error. The generated number is "number" if the Promise failed. 
Instead of number, substitute the generated number
*/

function usePromise() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            console.log(randomNumber);
                if (randomNumber % 2 === 0) {
                    resolve("Успешное выполнение promise");
                   // console.log('завершено успешно. Сгенерированное число — ' + randomNumber);
                    console.log('Completed successfully. The generated number is ' + randomNumber);
                } 
                else {
                    reject("Неуспешное выполнение promise");
                    //console.log('Завершено с ошибкой. Сгенерированное число — ' + randomNumber);
                    console.log('Completed with an error. The generated number is ' + randomNumber);
                }  
        }, 3000);
    });

    myPromise.then(
        successMessage => { console.log(successMessage); },
        errorMessage => { console.log(errorMessage); }
    );
};

usePromise();
 
     