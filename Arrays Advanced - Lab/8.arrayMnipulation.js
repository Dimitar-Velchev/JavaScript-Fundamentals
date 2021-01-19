function solve(input) {
    let targets = input.shift().split(' ').map(Number);
    let index = input.shift();
    let count = 0;


    while (index !== "End") {
        index = Number(index);
        if (index > -1 && index < targets.length) {
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] !== -1 && targets[index] !== -1 && index !== i) {
                    if (targets[index] < targets[i]) {
                        targets[i] -= targets[index];
                    } else if (targets[index] >= targets[i]) {
                        targets[i] += targets[index];
                    }
                }
            }
            targets[index] = -1;
            count++
            console.log(targets);

        }
        index = input.shift();
    }


    console.log(`Shot targets: ${count} -> ${targets.join(' ')}`);
}
solve(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])
    //solve(['24 50 36 70', '0', '4', '3', '1', 'End'])