# wechaty type checker

![wechaty-type](docs/images/logo.png)

Make it simple to get wechaty type

- Contact
- Room
- Offical Account
- WeChat Work Contact
- WeChat Work Room
...

## Install

```shell
npm install wechaty-type-checker
```

## Run

```ts
import { isOfficialId } from 'wechaty-type-checker'

const result = isOfficialId('bot-sentry')
if (result) {
  console.log('bot sentry is official account')
}
```
