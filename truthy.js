let checkedValue,truthyValues='true', falsyValues='false';
checkedValues = [0,0.1,'','0', -1, {},[],'false', null, undefined];
checkedValues.map((value,index)=>{
    let singleValue ='\n index: ' + index + ' -> ' + value;
    (value)?
    truthyValues+=singleValue:
    falsyValues+=singleValue;
})
console.log('truthyValues: ' + truthyValues);
console.log('falsyValues: ' + falsyValues);