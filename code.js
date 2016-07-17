'use strict';

function sayHey(){
  return "hey friends!";
}

function sayHeyFriend(name){
  if (typeof name === "undefined"){
    name = "Savannah";
  }
  return "hey " + name + "!!";
}
