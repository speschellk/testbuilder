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

var networks = {
  "Diner's Club": {length: 14, prefix: ["38", "39"]},
  "American Express": {length: 15, prefix: ["34", "37"]},
  "Visa": {length: [13, 16, 19], prefix: "4"},
  "MasterCard": {length: 16, prefix: ["51", "52", "53", "54", "55"]}
};

var detectNetwork = function(cardNumber) {
  var len = cardNumber.length;
  var pre = cardNumber.slice(0,2);
  if (pre[0] === "4") {
    pre = pre[0];
  };

  for (var key in networks) {
    var length = networks[key].length;
    var prefix = networks[key].prefix;

    if ((prefix === pre || prefix.includes(pre)) &&
    (length === len || length.includes(len) != "undefined" && length.includes(len))) {
      return key;
    };
  };
  return "We don't recognize this credit network";
};
