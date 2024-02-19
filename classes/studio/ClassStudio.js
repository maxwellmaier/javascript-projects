//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
  
    // Method to add a new score
    addScore(newScore) {
      this.scores.push(newScore);
    }
  
    // Method to calculate the average test score
    average() {
      let sum = this.scores.reduce((total, score) => total + score, 0);
      return parseFloat((sum / this.scores.length).toFixed(1));
    }
  
    // Method to determine the candidate's status
    status() {
      let avgScore = this.average();
      if (avgScore >= 90) {
        return "Accepted";
      } else if (avgScore >= 80 && avgScore < 90) {
        return "Reserve";
      } else if (avgScore >= 70 && avgScore < 80) {
        return "Probationary";
      } else {
        return "Rejected";
      }
    }
  }
  
  // Create objects for the candidates
  let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
  let merryMaltese = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
  let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);
  
  // Verify objects using console.log
//   console.log(bubbaBear);
//   console.log(merryMaltese);
//   console.log(gladGator);
  


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubbaBear.addScore(83);
// console.log(bubbaBear.scores);

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
// Test the average method on Merry Maltese
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}%`);

// Test the status method on each candidate
console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()}% and has a status of ${bubbaBear.status()}.`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()}% and has a status of ${merryMaltese.status()}.`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`);