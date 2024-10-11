let start = performance.now();

const promise = (num, time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(num < 3) {
                // resolve() : change status from 'pending' to 'fulfilled'
                resolve('PROMISE ' + num  + ' SUCCEEDS');
            }
            else {
                // reject() : change status from 'pending' to 'rejected'
                reject('PROMISE ' + num + ' FAILS');
            }
        }, time);
    });
};

const logTime = (result) => {
    console.log(result + ' AFTER ' + Math.round((performance.now() - start) / 1000) + 's');
};

// from 'pending' to 'fulfilled' => execute then()
// from 'pending' to 'rejected' => execute catch()

promise(1, 1000)
.then((result) => {
    logTime(result);
    return promise(2, 2000);
})
.then((result) => {
    logTime(result);
    return promise(3, 3000);
})
.then((result) => {
    logTime(result);
})
.catch((error) => {
    logTime(error);
});

promise(4, 4000)
.then((result) => {
    logTime(result);
})
.catch((error) => {
    logTime(error);
});
