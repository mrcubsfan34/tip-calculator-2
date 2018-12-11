var carl = {
    fullName: 'Carl Rhodes',
    bills: [121, 245, 23, 432, 12],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
               percentage = 0.2;
            } else if (bill >= 50 && bill < 200) {
               percentage = 0.15;
            } else {
               percentage = 0.1;
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues = bill + bill * percentage;
        }
    }
}

var sam = {
    fullName: 'Samuel Torrence',
    bills: [34, 501, 23, 678],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
               percentage = 0.2;
            } else if (bill >= 100 && bill < 300) {
               percentage = 0.1;
            } else {
               percentage = 0.25;
            }
            
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    
    }
}


function calcAverage(tips) {
   var sum = 0;
   for (var i = 0; i < tips.length; i++) {
      sum = sum + tips[i];
   }
   return sum / tips.length;
}



// Do the calculations
carl.calcTips();
sam.calcTips();

carl.average = calcAverage(carl.tips);
sam.average = calcAverage(sam.tips);
console.log(carl, sam);

if (carl.average > sam.average) {
  console.log(carl.fullName + ''/'s family pays higher tips with an average of $' + carl.average);
} else if (sam.average > carl.average) {
  console.log(sam.fullName + ''/'s family pays higher tips with an average of $' + sam.average);
} else {
  console.log('Both families pay equal tips!');
}












