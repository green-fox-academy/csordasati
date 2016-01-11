function Person(initial_Age){
    // Add some more code to run some checks on initial_Age
    this.initial_Age = initial_Age;
    }
  this.amIOld=function(age){
   // Do some computations in here and print out the correct statement to the console
   if (this.initial_Age <== 13 && this.initial_Age >== 0) {
       console.log('You are young.');
   } else if (this.initial_Age <== 18 && this.initial_Age >== 13) {
       console.log('You are old.');
   } else if (this.initial_Age >== 13) {}

  };
   this.yearPasses=function(){
          // Increment the age of the person in here
   };
}