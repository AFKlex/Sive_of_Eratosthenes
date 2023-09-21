// The upper limit to where the numbers should be checked 
// This value can be change but it will get slower the higher the number gets 
var upper_limit = 1000;

// Define the starte value. I start at 2 because 1 is not really easy to define if it is prime or not. 
var start_value = 2; 

// Used to store the count the amount of prime numbers I find. 
var prime_counter = 0;

// Declaration of Dict
var dict = {}

// Initialize the dictonary up to the upper limit. 
for (let index = start_value; index < upper_limit; index++) {
    // Set the default value of all dictory items to prime
    dict[index] = "prime" 
}

// Loop through the dictonary
for(var key in dict) {
    // Check if the value of the current element is prime
    // We start with the value 2 which is prime 
    if (dict[key] == "prime"){
        // We increase the prime counter 
        prime_counter +=1;

        // We loop through all remaining elements up to the upper limit
        for(let i = key*key; i< upper_limit; i++){
            // If we can devide by the key  without an reminder than we mark it as composite
            if(i % key == 0){
                // Mark as composite
                // Because we marked all numbers default as prime we only need to overwrite the composite numbers
                dict[i] = "composite"
            }
        }
    }
  }

// Create function for a nicer Console Log
function consoleLogDictionary(dictionary) {
    // Log title message
    console.log('Number\tStatus');
    // Loop through the dict again
    for (var key in dictionary) {
        //Print the key and the if it is prime or composite
        console.log(`${key}\t${dictionary[key]}`);
    }
}

// Call the function to display the dictionary as a table
consoleLogDictionary(dict)

// Log the amount of Prime numbers up to the limit are
console.log("Up to ",upper_limit, " there are ",prime_counter," Prime Numbers");