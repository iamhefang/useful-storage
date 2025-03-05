# useful-storage

```shell script
# use npm
npm i useful-storage

# use yarn
yarn add useful-storage

# use pnpm
pnpm add useful-storage
```

```js
import {
    getLocalStorage,
    getSessionStorage,
    setLocalStorage,
    setSessionStorage
} from "useful-storage";
const obj = {
    a:1,b:2
};
setLocalStorage("obj",obj);

console.log(getLocalStorage("obj"))// output: {a:1,b:2}
```
