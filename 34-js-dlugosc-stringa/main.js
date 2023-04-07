let string1 = "Uwielbiam JavaScript";
let string2 = "Jestem świetnym programistą";

function findLongerString(str1, str2) {
  if (str1.length > str2.length) {
    return str1;
  } else {
    return str2;
  }
}

console.log(findLongerString(string1, string2));
