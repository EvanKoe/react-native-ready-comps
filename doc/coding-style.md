# Coding Style

## Introduction

A coding style is a set of rules that explain how to get a clean code and helps to understand the code others will write. If you want to contribute, you MUST follow those rules.

## Rules

### Typescript precises types

We use Typescript. And one of its greatest advantages is that you must declare types for your variables. You also must declare types for templates.

```typescript
// Don't
const a = 1;
const [a, setA] = useState(1);

// Do
const a: number = 1;
const [a, setA] = useState<number>(1);

// Warning ! It's the same thing when you declare a function. Please avoid 'any' types in your code as much as possible.
interface a {
  fun: (a: number) => boolean;
};
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

Indentations will be done using 2 spaces. Do not hesitate to go to a new line and indent when you see that an inline object or function begins to be too long.

```typescript
// Don't
promise.then(() => { console.log(myObject.firstKey.firstValue); });

// Do
promise.then(() => {
  console.log(myObject.firstKey.firstValue);
});

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
// Don't
const a:number=1;
promise.then(()=>{console.log(a);});
if(a===1){
  console.log(a);
}

// Do
const a: number = 1;
promise.then(() => { console.log(a); });
if (a === 1) {
  console.log(a);
}

// Warning ! Spaces INSIDE of parenthesis in 'if' and 'for' statements won't be tolerated.
if ( a === 1 ) { // Don't do that
  console.log(a);
}

```

> Do not hesitate to add empty new lines everywhere you think they could help to make your code easier to read !

### Functional components and ES7

You must use ES7 javascript coding rules and functional components in React Native. No class components will be tolerated.

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
In the `Base.tsx`, you must define default values for your component, unless those props are required.
You are also asked to do a decent error handling, using the `??` keyword, or by simply using ternary operators.

I also recommend to make props not required, unless you're forced to pass them in any way to make your component work properly.

```typescript
// constants/CompTypes.tsx
interface MyComponentProps {
  a?: number,
  callback?: () => void,
  str?: string | undefined
} // see the '?:' that says those props are not required

// components/MyComponent.tsx
const MyComponent = ({
  a,
  callback,
  str
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

### Trailing spaces before closing tag

You're asked to let a space between the last prop and the closing tag of a component that closes itself.

```typescript
// Do
<RComps.Clickable value='hello' /> // notice the space before the '/' character

// Don't
<RComps.Clickable value='hello'/>
```

## Outro

In case you do not apply those rules in your code, your pull request may be refused for `syntax` or `coding style`. One or two errors can be tolerated as soon as they don't make your code hard to understand.
