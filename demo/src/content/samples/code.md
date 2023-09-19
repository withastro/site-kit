---
title: Code blocks
prose: true
order: 3
---

## Astro syntax

```astro
---
// Your component script here!
import Banner from '../components/Banner.astro';
import ReactPokemonComponent from '../components/ReactPokemonComponent.jsx';
const myFavoritePokemon = [
  /* ... */
];
const { title } = Astro.props;
---

<!-- HTML comments supported! -->{/* JS comment syntax is also valid! */}

<Banner />
<h1>Hello, world!</h1>

<!-- Use props and other variables from the component script: -->
<p>{title}</p>

<!-- Include other UI framework components with a `client:` directive to hydrate: -->
<ReactPokemonComponent client:visible />

<!-- Mix HTML with JavaScript expressions, similar to JSX: -->
<ul>
  {myFavoritePokemon.map((data) => <li>{data.name}</li>)}
</ul>

<!-- Use a template directive to build class names from multiple strings or even objects! -->
<p class:list={['add', 'dynamic', { classNames: true }]}></p>
```

## HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## CSS

```css
:root {
  --background: black;
  --foreground: #fff;
  --spacer-sm: 1rem;
}

main {
  max-width: 1280px;
  padding-inline: 2rem;
  padding-block: var(--spacer-sm);
  min-height: calc(100% - var(--spacer-sm));
}
```

## JavaScript

```js
function isString(path) {
  return typeof path === 'string' || path instanceof String;
}

export function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, '');
}

export function joinPaths(...paths) {
  return `/${paths.filter(isString).map(trimSlashes).join('/')}`;
}
```

## TypeScript

```ts
function isString(path: unknown): path is string {
  return typeof path === 'string' || path instanceof String;
}

export function trimSlashes(path: string) {
  return path.replace(/^\/|\/$/g, '');
}

export function joinPaths(...paths: (string | undefined)[]) {
  return `/${paths.filter(isString).map(trimSlashes).join('/')}`;
}
```
