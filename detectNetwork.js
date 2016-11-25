// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Note: `cardNumber` will always be a string
// The Diner's Club network always starts with a 38 or 39 and is 14 digits long
// The American Express network always starts with a 34 or 37 and is 15 digits long
// Visa always has a prefix of 4 and a length of 13, 16, or 19.
// MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
// Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
// Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.

var networks = {
  "Diner's Club":     {length: [14],         prefix: ["38", "39"]},
  "American Express": {length: [15],         prefix: ["34", "37"]},
  "Visa":             {length: [13, 16, 19], prefix: ["4"]},
  "MasterCard":       {length: [16],         prefix: ["51", "52", "53", "54", "55"]},
  "Discover":         {length: [16, 19],     prefix: ["6011", "644-649", "65"]},
  "Maestro":          {length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304"]}
};

var detectNetwork = function(cardNumber) {
  for (var key in networks) {
    var length = networks[key].length;
    var prefix = networks[key].prefix;

    if (length.includes(cardNumber.length)) {
      for (var i = 0; i < prefix.length; i++) {
        if (cardNumber.startsWith(prefix[i])) {
          return key;
        };
      };
    };
  };
  return "Not a recognized credit network";
};
