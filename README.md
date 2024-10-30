# hack-intro-js
Hack@UCI 10/29/2024 Intro to JS Workshop Starter Code

# JavaScript Essentials for React Development
A quick guide to JavaScript concepts crucial for React development

## Table of Contents
- [Modern JavaScript Syntax](#modern-javascript-syntax)
- [Essential JavaScript Functions & Concepts](#essential-javascript-functions--concepts)
- [JavaScript in React Context](#javascript-in-react-context)
- [Common Patterns & Best Practices](#common-patterns--best-practices)
- [Workshop Exercises](#workshop-exercises)

## Modern JavaScript Syntax

### 1. Arrow Functions
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Multiline arrow function
const calculate = (a, b) => {
    const sum = a + b;
    return sum * 2;
};
```

### 2. Destructuring
```javascript
// Object destructuring
const user = { name: 'Alice', age: 25 };
const { name, age } = user;

// Array destructuring
const coordinates = [10, 20];
const [x, y] = coordinates;

// Function parameter destructuring
const UserProfile = ({ name, age }) => {
    return <h1>{name} is {age} years old</h1>;
};
```

### 3. Spread/Rest Operators
```javascript
// Spread operator (...)
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// Object spread
const baseConfig = { theme: 'dark', lang: 'en' };
const extendedConfig = { ...baseConfig, debug: true };

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
```

### 4. Template Literals
```javascript
const name = 'User';
const greeting = `Hello, ${name}!`;

// Multiline strings
const message = `
    This is a multiline
    string with ${name}
`;
```

## Essential JavaScript Functions & Concepts

### 1. Array Methods
```javascript
const items = [1, 2, 3, 4, 5];

// map - transform elements
const doubled = items.map(x => x * 2);

// filter - select elements
const evenNumbers = items.filter(x => x % 2 === 0);

// reduce - accumulate values
const sum = items.reduce((total, current) => total + current, 0);

// find - get first matching element
const firstBigNumber = items.find(x => x > 3);
```

### 2. Object Methods
```javascript
// Object.keys()
const user = { name: 'Bob', age: 30 };
const keys = Object.keys(user); // ['name', 'age']

// Object.values()
const values = Object.values(user); // ['Bob', 30]

// Object.entries()
const entries = Object.entries(user); // [['name', 'Bob'], ['age', 30]]
```

### 3. Promises & Async/Await
```javascript
// Promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
        // Async operation
        setTimeout(() => resolve('Data'), 1000);
    });
};

// Async/Await
const getData = async () => {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};
```

## JavaScript in React Context

### 1. Component Props & State
```javascript
// Props destructuring
const Button = ({ onClick, children }) => {
    return <button onClick={onClick}>{children}</button>;
};

// State with hooks
const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
};
```

### 2. Common React Patterns
```javascript
// Conditional rendering
{isLoggedIn && <WelcomeMessage />}
{isLoggedIn ? <UserDashboard /> : <LoginForm />}

// List rendering
{items.map(item => (
    <ListItem key={item.id} {...item} />
))}

// Event handling
const handleSubmit = (event) => {
    event.preventDefault();
    // Form handling logic
};
```

### 3. State Updates
```javascript
// Array updates
const addItem = (newItem) => {
    setItems([...items, newItem]);
};

// Object updates
const updateUser = (updates) => {
    setUser(prev => ({ ...prev, ...updates }));
};
```

## Common Patterns & Best Practices

### 1. Short-Circuit Evaluation
```javascript
// Instead of
if (condition) {
    doSomething();
}

// Use
condition && doSomething();
```

### 2. Nullish Coalescing
```javascript
const value = someValue ?? defaultValue;
```

### 3. Optional Chaining
```javascript
const userCity = user?.address?.city;
```

## Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [React Documentation](https://react.dev/)
- [JavaScript for React Developers](https://www.youtube.com/playlist?list=PLC3y8-rFHvwhuX4qGvFx-wPy_MEi6Jdp7)