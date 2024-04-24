// Define the Tree class
class Tree {
    constructor(species) {
      this.species = species;
    }
  
    // Static method definition
    static definition() {
      return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
  }
  
  // Define the Deciduous class that extends Tree
  class Deciduous extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method definition
    static definition() {
      return `${super.definition()} Deciduous trees shed their leaves annually.`;
    }
  }
  
  // Define the Evergreen class that extends Tree
  class Evergreen extends Tree {
    constructor(species, name) {
      super(species);
      this.name = name;
    }
  
    // Static method definition
    static definition() {
      return `${super.definition()} Evergreens keep their leaves all year round.`;
    }
  }

  const oak = new Deciduous("Oak", "Oak Tree");
console.log(oak.species); // Output: Oak
console.log(oak.name); // Output: Oak Tree
console.log(Deciduous.definition()); // Output: A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves. Deciduous trees shed their leaves annually.
