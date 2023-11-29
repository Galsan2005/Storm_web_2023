function addRandomNumber(number) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            var a = Math.floor(Math.random()*10+1);
            var result = number + a;
            resolve(result);
        }, 1000)
    })
}

addRandomNumber(5)
    .then(result => {
        console.log("First addition:", result);
        return addRandomNumber(result);
    })
    .then(result => {
        console.log("Second addition:", result);
        return addRandomNumber(result);
    })
    .then(result => {
        console.log("Final result after third addition:", result);
    })
    .catch(error => {
        console.error("Error in Promise chain:", error)
    })
