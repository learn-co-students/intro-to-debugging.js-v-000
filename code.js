'use strict';

function sayHey(){
  return "hey friends!"
}

function sayHeyFriend (name) {
  if (name === undefined || name === null) {
    return "hey friends!"
  } else {
    return "hey " + name + "!!"
  }
}