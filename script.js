for (let index = 0; index < 16; index++) {
  if (index > 5) {
    console.log(index + "მეტია 5-ზე");
  }
}

let numbers = [3, 6, 9, 12, 15]

for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] % 2 === 0) {
        console.log(numbers[index]);
        
    }
}


let text = "hello world apple"
for (let index = 0; index < text.length; index++) {
  
    if (text[index] === "a") {
        console.log(text[index] + "aba ra");
        
    }
    else{ console.log(text.charAt(index));
    }
}


let colors = ["red", "green", "blue", "yellow"]

for (let index = 0; index < colors.length; index++) {
    
    if (colors[index].length >= 5) {
        console.log( colors[index]);
        
    }
}


for (let index = 0; index < 50; index++) {
  if (index % 7 === 0) {
    console.log(index + "იყოფა 7-ზე");
    
  }
}


let numbers1 = [4, 8, 12, 16, 20];
let changenum = [];

for (let index = 0; index < numbers1.length; index++) {
    changenum.push(numbers1[index] * 2);
}

console.log(changenum);


let world = "javascript"

for (let index = 0; index < world.length; index++) {
  if (world[index] === "j") {
    console.log();
    
  }
  else{console.log(world.charAt(index));
  }
}

let musnumbers = [5, 10, 15, 20, 25] 
for (let index = 0; index < musnumbers.length; index++) {
 
    if (musnumbers[index] % 5 === 0) {
        console.log(musnumbers[index]);
        
    }
}


let words = "hello world"
for (let index = 0; index < words.length; index++) {
    if (words[index] === "o") {
      console.log();
      
    }
    else{console.log(words.charAt(index));
    }
  }

  
  let numbers2 =[1, 2, 3, 4, 5, 6]
let sum = 0
  for (let index = 0; index < numbers2.length; index++) {
   if (numbers2[index] %2 === 0) {
   console.log(sum += numbers2[index]);
   
    
   }
   
  }


let number = 10
for (let index = 0; index < 11; index++) {
  
    console.log(number + "*" + index + "=" + number * index);
    
}

let elements = [2, 7, 4, 9, 5]

for (let index = 0; index < elements.length; index++) {
   
    if (elements[index] > 4) {
        console.log(elements[index] * 3);
        
    }
}

for (let index = 0; index < 30; index++) {
   
    if (index > 10) {
         console.log(index + " მეტია 10 ზე");
         
    }
    else{
        console.log(index);
        
    }
}


let stric = "frontend"
for (let index = 0; index < stric.length; index++) {
    if (stric[index] === "e") {
        console.log("ნაპოვნია " + stric[index]);
        
    }
    else{console.log(stric[index]);
    }
    
}

let musel = [100, 200, 300, 400, 500]
for (let index = 0; index < musel.length; index++) {
  
    if (musel[index] < 250) {
        console.log(musel[index]);
        
    }
}