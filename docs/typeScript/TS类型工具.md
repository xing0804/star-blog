---
title: TypeScript类型工具
date: 2023-02-23
categories:
 - typeScript
tags:
 - ts
---

## keyof

获取对象当中所有属性名

通过 `keyof` 操作符可以获取对象中的所有键类型组成的**联合类型**。

```typescript
type Person = {
  id: number;
  name: string;
  age: number;
};

type P1 = keyof Person; //'id' | 'name' | 'age'

// 获取对象所有所有属性的类型
type P2 = Person[keyof Person];  // number | string

```

## extends

继承

## typeof

使用typeof可以推断出对应变量对象包含的类型

## Partial

当我们对于对象内的属性不确定时，我们会将对应的属性加入可选符?，如果对于整个对象内的属性都不确定，我们可以通过Partial解决，Partial可以将其类型中的所有属性都变为可选?。

## Required

与Partial相反，所有属性与原属性相同，但是都是必选

```typescript
interface IUser1 {
  name: string;
  age?: number;
  gender?: number;
}
type IUser2 = Required<IUser1>

相当于
interface IUser2 {
  name: string;
  age: number;
  gender: number;
}

```

## Readonly

将类型中所有的属性都增加readonly修饰符，变为只读

## Pick

将类型中的属性挑出来，重新组成一个新的类型。

```typescript
interface Person {
    name: string;
    age: number;
    height: number;
}

// PP 只包含name和age两个属性，height没有了
type PP = Pick<Person, 'name' | 'age'>
```

## Omit

* 语法：`Omit<T,K>`

* 作用：将T中存在的K类型剔除

* 案例：

  ```typescript
  interface Person {
      name: string;
      age: number;
      height: number;
  }
  
  type TOmit = Omit<Person, 'height'>
  
  const person: TOmit = {
      name: 'name',
      age: 11
  }
  
  ```

## Record

将K中所有联合类型的子类型转换为T类型

> Record<keyType, valueType>

```typescript
interface Person {
    name: string;
    age: number
}

type Ktype = 'father' | 'son'

const person: Record<Ktype, Person> = {
    father: {
        name: 'liu',
        age: 7
    },
    son: {
        name: 'liu',
        age: 20
    }
}

```

## Exclude

将类型A中属于类型B的属性移除掉

```typescript
type T0 = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = Exclude<string | number | (() => void), Function>; // string | number

原理
type Exclude<T, U> = T extends U ? never : T;

```

