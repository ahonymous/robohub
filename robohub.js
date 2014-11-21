function opposite() {
    var stepType = ['north', 'east', 'south', 'west'];
    var backStepType = {north: 'south', south: 'north', west: 'east', east: 'west'};
    var historySteps = [];
    var steps = [];
    var reverse = false;
    var out = true;

    while (out === true) {
        var direction = [];

        if (!reverse) {
            direction = stepType.filter(function (val) {
                if (isFree(val) && val != backStepType[steps[steps.length - 1]]) {
                    return val;
                }
            });
        } else {
            direction = historySteps.pop();
            window[backStepType[steps.pop()]]();
        }

        reverse = direction.length < 1;
        if (steps.length) {
            direction.sort(function (a) {
                if (a == steps[steps.length - 1]) {
                    return 1;
                }

                return 0;
            });
        }

        if (!reverse) {
            steps.push(direction.pop());
            historySteps.push(direction);
            out = window[steps[steps.length - 1]]();
        }
        console.log(map());
    }

    return map();
}
