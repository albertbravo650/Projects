class SimpleQueue {
    constructor() {
        this.queue = [];
        this.running = false;
    }

    addTask(task) {
        // console.log('test');
        return new Promise((res, rej) => {
            this.queue.push({task, res, rej});
            this.runNextTask();
        });
    }

    async runNextTask() {
        // console.log('test');
        if(!this.running && this.queue.length > 0) {
            this.running = true;
            const {task, res, rej} = this.queue.shift();

            try {
                const result = await task();
                res(result);
            }
            catch(err) {
                rej(err);
            }
            finally {
                this.running = false;
                this.runNextTask();
            }
        }
    }
}

const queue = new SimpleQueue();

function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
}

async function task1() {
    console.log('Task 1 initiated');
    await timer(2000);
    console.log('Task 1 finished');
    return 'Task 1 DONE';
}

async function task2() {
    console.log('Task 2 initiated');
    await timer(1000);
    console.log('Task 2 finished');
    return 'Task 2 DONE';
}

async function task3() {
    console.log('Task 3 initiated');
    await timer(8000);
    console.log('Task 3 finished');
    return 'Task 3 DONE';
}

async function task4() {
    console.log('Task 4 initiated');
    await timer(6000);
    console.log('Task 4 finished');
    return 'Task 4 DONE';
}

async function task5() {
    console.log('Task 5 initiated');
    await timer(3000);
    console.log('Task 5 finished');
    return 'Task 5 DONE';
}

// console.log('test');
queue
    .addTask(task1)
    .then((res) => {
        console.log('End message: ', res);
        return queue.addTask(task2);
    })
    .then((res) => {
        console.log('End message: ', res);
        return queue.addTask(task3);
    })
    .then((res) => {
        console.log('End message: ', res);
        return queue.addTask(task4);
    })
    .then((res) => {
        console.log('End message: ', res);
        return queue.addTask(task5);
    })
    .then((res) => {
        console.log('End message: ', res);
    })
    .catch((err) => {
        console.error('Error: ', err);
    })