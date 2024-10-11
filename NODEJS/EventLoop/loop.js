function timer (end, index = 0)
{
    if(index >= end) {
        return;
    }
    setTimeout(() => {
        console.log(`===== LOOP ${index + 1} : TIMER =====`);
        timer(end, index + 1);
    }, 0);
    let start = Date.now();
    while(Date.now() - start < 100) {}
}

function check (end, index = 0)
{
    if(index >= end) {
        return;
    }
    setImmediate(() => {
        console.log(`===== LOOP ${index + 1} : CHECK =====`);
        check(end, index + 1);
    });
}

function loop(end)
{
    timer(end);
    check(end);
}

module.exports.loop = loop;