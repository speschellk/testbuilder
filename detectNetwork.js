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
// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.


var networks = {
  "Diner's Club":     {length: [14],             prefix: ["38", "39"]},
  "American Express": {length: [15],             prefix: ["34", "37"]},
  "MasterCard":       {length: [16],             prefix: ["51", "52", "53", "54", "55"]},
  "Discover":         {length: [16, 19],         prefix: ["6011", "644", "645", "646", "647", "648", "649", "65"]},
  "Maestro":          {length: [12, 13, 14, 15, 16, 17, 18, 19], prefix: ["5018", "5020", "5038", "6304"]},
  "Switch":           {length: [16, 18, 19],     prefix: ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"]},
  "China UnionPay":   {length: [16, 17, 18, 19], prefix: ["624", "625", "626", "6282", "6283", "6284", "6285", "6286", "6287", "6288", iterateCU()]},
  "Visa":             {length: [13, 16, 19],     prefix: ["4"]}
};

var detectNetwork = function(cardNumber) {
  for (var key in networks) {
    var length = networks[key].length;
    var prefix = networks[key].prefix;

    if (length.includes(cardNumber.length)) {
      for (var i = 0; i < prefix.length; i++) {
        if (Array.isArray(prefix[i])) {
          for (var j = 0; j < prefix[i].length; j++) {
            if (cardNumber.startsWith(prefix[i][j])) {
              return key;
            }
          }
        } else if (cardNumber.startsWith(prefix[i])) {
          return key;
        };
      };
    };
  };
  return "Not a recognized credit network";
};

function iterateCU() {
  var arr = [];
  for (var i = 622126; i <= 622925; i++) {
    arr.push(i.toString());
  };
  return arr;
};
