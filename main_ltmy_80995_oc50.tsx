const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
banana - kiwi
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
96,40,99,8,10,78,15,79,99,66,54,19,4,3,44,13,31,18,81,47,5,13,4,31,42,37,48,8,43,62,10 / 52
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
kiwi - 39,32,35,75,94,54,29,52,65,82,5,97,60,54,98,85,18,28,92,86,96,96,30,71,58,48,36,5,0,37,31,29,72,94,80,95,22,41,71,91,66,63,98,20,78,38,26,49,50,7,43,73,61,27,21,56,19,4,32,13,79,35,6,67,86,47,87,37,19,61
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

57,50,87,26,41,72,15,46,13,58,75,90,76,82,1,1,72,24,12,73,42,76,30,70,58,30,26,15,93,26,80,38,79,20,31,52,22,63,64,41,90,80,47,67,86,79,93,35,87,94,9,3,50,11,23 / true
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

43 + 7

function addNumbers(a, b) { return a + b; }
true + true
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };

const findLargestNumber = numbers => Math.max(...numbers);
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
let result = performOperation(getRandomNumber(), getRandomNumber());
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
72,69,84,8,77,19,42,27,85,31,51,77,99 / false

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
10,99,19,42,87,5,49,2,14,77,31,35,72,99,54,0,0,19,51,61,69,57,65,3,74,48,35,83,79,54,86,68,39,13,13,98,51,2,3,72,2,31,8,80,32,53,47,56,70,98,4,42,57,97,44 / kiwi
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const reverseString = str => str.split("").reverse().join("");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

18 * true
const randomNumber = getRandomNumber();
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true / grape
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

const formatDate = date => new Date(date).toLocaleDateString();

const removeDuplicates = array => Array.from(new Set(array));
33,30,79,14,1,46,81,52,38,17,32,7,8,21,61,17,54,61,61,49,16,60,52,38,85,91,11,81,77,81,14,0,6,79,1,97,62,93,89,1,59,93,94,75,46,88,89,22,76,75,30,91,35,65,30,44,90,86,59,90,95,79,95,69,39,47,65,42,36,68,78,80,46,33 / 85
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
kiwi

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
