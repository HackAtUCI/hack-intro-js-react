// ==========================================
// PART 1: Console Methods and String Templates
// ==========================================
console.log("\n----- Console Methods Demo -----");

// Basic console.log
console.log("1. Basic console.log");
console.log("Helloooo CHAT!!!!!!!!");

// Console with multiple arguments
console.log("2. Console with multiple values:", 42, "some text", true);

// Template literals (string interpolation)
const workshopName = "JS Fundamentals";
console.log(`3. Welcome to ${workshopName}!`);

// Console warning and error
console.warn("4. This is a warning message");
console.error("5. This is an error message");

// Console table for structured data
const student = { name: "Alice", age: 20, major: "CS" };
console.log("\n6. Console table demo:");
console.table(student);

// ==========================================
// PART 2: Arrow Functions
// ==========================================
console.log("\n----- Arrow Functions Demo -----");

// Traditional function
function addTraditional(a, b) {
    return a + b;
}

// Arrow function - concise
const addArrow = (a, b) => a + b;

// Arrow function - with block
const addArrowBlock = (a, b) => {
    const sum = a + b;
    return sum;
};

console.log("1. Traditional function:", addTraditional(5, 3));
console.log("2. Arrow function:", addArrow(5, 3));
console.log("3. Arrow function with block:", addArrowBlock(5, 3));

// Real-world example: Event handler style
const button = { text: "Click me", onClick: null };
button.onClick = () => console.log("Button clicked!");

console.log("\n4. Event handler style:");
button.onClick();

// ==========================================
// PART 3: Array Methods (map, filter, find)
// ==========================================
console.log("\n----- Array Methods Demo -----");

const brainNourishmentArray = [
    { id: 1, name: "Mango", brainRotLevel: 95, goated: true },
    { id: 2, name: "Prime", grade: 65, goated: false },
    { id: 3, name: "Lunchly", grade: 85, goated: true },
    { id: 4, name: "Talk Tuah", grade: 70, goated: true }
];

// map: Transform data
console.log("\n1. map() - Get all student names:");
const memeNames = brainNourishmentArray.map(meme => meme.name); // notice you use a "lambda" / arrow function

// .map() is a higher order function that takes a callback function as an argument
// The callback function is called for each element in the array
// The return value of the callback function is used to create a new array
// The new array has the same length as the original array
// The new array contains the return values of the callback function for each element

console.log(memeNames);

// map with more complex transformation
console.log("\n2. map() - Judge meme levels:");
const memeLevel = brainNourishmentArray.map(meme => ({
    displayName: meme.name.toUpperCase(),
    rotStatus: meme.brainRotLevel >= 85 ? "Cooked" : "Needs more instagram reels"
}));

console.log(memeLevel);

// filter: Get subset of data
console.log("\n3. filter() - Get Lunchly memes:");
const goodReels = brainNourishmentArray.filter(meme => meme.name === "Lunchly");
console.log(goodReels);


// ==========================================
// PART 4: Destructuring
// ==========================================
console.log("\n----- Destructuring Demo -----");

// Object destructuring
const user = {
    firstName: "John",
    lastName: "Doe",
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    }
};

// Basic destructuring
const { firstName, lastName } = user;
console.log("1. Basic destructuring:", firstName, lastName);

// Nested destructuring
const { address: { city, state } } = user;
console.log("2. Nested destructuring:", city, state);

// Array destructuring
const coordinates = [10, 20, 30];
const [x, y, z] = coordinates;
console.log("3. Array destructuring:", x, y, z);

// Skipping elements
const [first, , third] = coordinates;
console.log("4. Skipping elements:", first, third);

// Rest operator in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log("5. Rest operator:", head, tail);

// ==========================================
// PART 5: Practical Example Combining Concepts
// ==========================================
console.log("\n----- Practical Example -----");

// Sample data: Workshop participants
const participants = [
    { id: 1, name: "Alice Johnson", skills: ["JavaScript", "React", "Node"] },
    { id: 2, name: "Bob Smith", skills: ["Python", "JavaScript"] },
    { id: 3, name: "Charlie Brown", skills: ["React", "CSS"] },
    { id: 4, name: "Diana Williams", skills: ["JavaScript", "HTML", "React"] }
];

// Task: Get names of participants who know React
const findReactDevelopers = (participants) => {
    return participants
        .filter(({ skills }) => skills.includes("React"))
        .map(({ name }) => name);
};

console.log("React developers in our workshop:");
console.log(findReactDevelopers(participants));

// ==========================================
// PART 6: Interactive Exercise Template
// ==========================================
console.log("\n----- Interactive Exercise -----");

// TODO: Have workshop participants modify this function
const exerciseFunction = (data) => {
    // Task for participants:
    // 1. Filter for participants with JavaScript skills
    // 2. Transform to get their names and number of skills
    // 3. Sort by number of skills
    return "Implement me!";
};

// Test data for exercise
const testData = participants;
console.log("Exercise - Your turn to implement!");
// console.log(exerciseFunction(testData));