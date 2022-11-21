# Coding Style

## Introduction

A coding style is a set of rules that explain how to get a clean code and helps to understand the code others will write. If you want to contribute, you MUST follow those rules.

## Rules

### Typescript precises types

We use Typescript. And one of its greatest advantages is that you must declare types for your variables. You also must declare types for templates.

```typescript
const a: number = 1;
const [a, setA] = useState<number>(1);
```

### Semicolons

Typescript is a language that do not require semicolons at the end of lines, but we want you to write them anyway. It's a great way to understand where your line ends, especially in case of `.then()` blocks.

```typescript
const a: number = 1;
return (
  <Text>Hello world!</Text>
);
promise.then(() => {
  console.log(a);
})  // line is not finished
.then(() => {
  return true;
}); // line is finished now
```

### Indentations

Indentations will be done using 2 spaces. Do not hesitate to go to a new line and indent when you see an inline object or function starts being too long.

```typescript
// Don't
promise.then(() => { console.log(myObject.firstKey.firstValue); }); // do not do this

// Do
promise.then(() => {
  console.log(myObject.firstKey.firstValue);
}); // do this instead

// Don't
return (<View><Text>{ myObject.firstKey.firstValue }</Text></View>);

// Do
return (
  <View>
    <Text>
      { myObject.firstKey.firstValue }
    </Text>
  </View>
);
```

### Spaces

You must add spaces inside of curly brackets, around parenthesis in `if`, `for` and `while` statements, after commas, before and after equal signs (unless they are an arrow =>), and after colons. You must NOT add a space before or after semicolons.

```typescript
const a: number = 1;
promise.then(() => { console.log(a); });
if (a === 1) {
  console.log(a);
}

```

> Do not hesitate to add empty new lines everywhere you think they could help to make your code easier to read !

### Functionnal components and ES7

You must use ES7 javascript coding rules and functionnal components in React Native. No class components will be tolerated.

```typescript
// to declare a function
const myFunction = (a: int) => {
  console.log(a);
}

myFunction(3);

// to create a component
const MyComponent = ({
  a = 3     // always set a default value if parameter not required
}: MyComponentProps) => {
  return (
    <Text>{ a }</Text>
  );
}
```

### Component prop types

For each component you make, you must create a type that defines all the props you can send to the component. By default, make all props not required, unless you're forced to pass them. This props type must be named `MyComponentProps` and be declared in `constants/CompTypes.tsx` as an interface.
In your components, you must define default values, unless you're forced to pass them.
You are also asked to do a decent error handling, using the `??` keyword, or by simply using ternary operators.

```typescript
// constants/CompTypes.tsx
interface MyComponentProps {
  a?: number,
  callback?: () => void,
  str?: string | undefined
}

// components/MyComponent.tsx
const MyComponent = ({
  a = -1,
  callback = () => {},
  str = undefined
}: MyComponentProps) => {
  return (
    <Text>{ str ?? "str is undefined" }</Text>
    { a !== -1 && (
      <Text>{ a.toString() }</Text>
    ) }
  );
}
```

### Operators and comparisons

You're aware of the existence of `===` and `!==` operators. You must use them. Using a double equals operator won't be tolerated, unless you have a reason to do so.

```typescript
const a: string = "undefined";
const b: undefined = undefined;

if (a == b) { // this actually works because types are not evaluated with ==
  console.log(a);
}
if (a === b) {  // this does not work because string is different from undefined
  console.log(a);
}
```

### React objects and functions

React objects and functions have to be imported. You must not import the React global object and use functions from it.

```typescript
// Do
import React, { useState } from "react";

const [a, setA] = useState<number>(1);

// Don't
import React from 'react';

const [a, setA] = React.useState<number>(1);
```

## Outro

In case you do not apply those rules in your code, your pull request may be refused for `syntax` or `coding style`. One or two errors can be tolerated as soon as they don't make your code hard to understand.
