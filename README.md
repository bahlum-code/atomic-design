# atomic-design

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

# Atomic Design
Atomic design is a methodology for creating design systems chemistry-based and there are five distinct levels in atomic design: Atoms, Molecules, Organisms, Templates and Pages. Let’s see them in depth.

## Atoms
It is the smallest unit that composes our application, it is not useful by itself but it allows us to have more control over the application elements.

## Molecules
Molecules, as in nature, are groups of atoms linked together. In our application, molecules are the smallest components composed of one or more repeated atoms, always simple combinations built for reuse.

Having composed a molecule by several atoms already made, make us work with **"do one thing and do it well"** mentality. Both atoms and molecules encourage the creation of independent and reusable components.

## Organisms
Organisms are groups of molecules joined together to form a relatively complex, distinct section of an interface, as the header and the footer.

## Templates
Now, we left behind the chemistry-based theory to get into common web language. Templates consist mostly of groups of organisms and/or molecules to form the common structure of a page, what we used to call layout.

## Pages
Pages are specific instances of templates, where our components are replaced with real data to give an accurate depiction of what a user will see.

[Source](https://vuedose.tips/how-to-structure-a-vue-js-app-using-atomic-design-and-tailwindcss#organisms)