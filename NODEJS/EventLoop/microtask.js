// microtask callbacks added in other microtask callbacks will be executed until the queue becomes empty

Promise.resolve().then(() => {
    console.log('microtask 1');
    Promise.resolve().then(() => console.log('microtask in microtask 1'));
    process.nextTick(() => console.log('nextTick in microtask 1'));
});
Promise.resolve().then(() => console.log('microtask 2'));
process.nextTick(() => console.log('nextTick 1'));