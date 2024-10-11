// nextTick callbacks are executed before microtask callbacks
// nextTick callbacks added in other nextTick callbacks will be executed until the queue becomes empty

Promise.resolve().then(() => console.log('microtask 1'));
process.nextTick(() => {
    console.log('nextTick 1');
    Promise.resolve().then(() => console.log('microtask in nextTick 1'));
    process.nextTick(() => console.log('nextTick in nextTick 1'));
});
process.nextTick(() => console.log('nextTick 2'));
