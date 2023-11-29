async function processTask(taskId) {
    var myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (taskId > 0) {
                resolve(`Task ${taskId} completed successfully.`);
            } else {
                reject(`Invalid Task ID: ${taskId}`);
            }
        }, 1000);
    });

    try {
        const res = await myPromise;
        console.log(res);
    } catch (err) {
        console.error(err);
    }
}

processTask(5);
processTask(-1);
