const StepType = (stepCount) => {
    let stepResult = ''
    switch (true) {
        case (stepCount > 0 && stepCount <= 1000): stepResult = '周末'; break;
        case (stepCount > 2500 && stepCount <= 3000): stepResult = '加班'; break;
        case (stepCount > 5000 && stepCount <= 6000): stepResult = '正常上班'; break;
        default: stepResult = '暂时不存在'; break;
    }
    return stepResult;
};


console.log(StepType(7000))