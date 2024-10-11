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

async function async() {
    try {
        logTime(await promise(1, 1000));
        logTime(await promise(2, 2000));
        logTime(await promise(3, 3000));
    }
    catch (err) {
        logTime(err);
    }
}

async();

promise(4, 4000)
.then((result) => {
    logTime(result);
})
.catch((error) => {
    logTime(error);
});