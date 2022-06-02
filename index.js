// Write your solution in this file!
const employee ={
    name: "Kenn",
    streetAddress:"Stima Plaza"
};
const updateEmployeeWithKeyAndValue = (object, key, value) =>{
    return {
        ...object,
        [key]:value
    }
};
const destructivelyUpdateEmployeeWithKeyAndValue = (object, key, value) => {
    object[key] = value;
    return object;
};
const deleteFromEmployeeByKey = (object,key,value) => {
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
};
const destructivelyDeleteFromEmployeeByKey = (object, key, value) => {
    delete object[key];
    return object;
 };
