let delayedHello = new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve('Hello, World!');
    }, 2000)
})

delayedHello.then((res) => {
    console.log(res);
});
