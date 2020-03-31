//Convert Key, Values in an Object to Array//
//Write a function that converts an object into an array of keys and values.//
//Edabit link: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR// 

function objectToArray(obj) {
    var result = Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
    return (result);
}

//Capitalize the First Letter of Each Word
//Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
//Edabit link:https://edabit.com/challenge/LvtsCQNpx7CwHGubf


function makeTitle(str) {
    const str1 = str;
    if (str1.toUpperCase() === str) {
        return str;
    } else {
        var splitStr = str.split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
        return (splitStr.join(' '));
    }
}

//Capitalize the Names
//Create a function that takes an array of names and returns an array with only the first letter capitalized.
//Edbit link:https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5

function capMe(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase());
    }
    return result;
}
