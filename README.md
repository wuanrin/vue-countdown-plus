# vue-countdown-plus

A simple countdown component for Vue2.x.

### [Live Demo](https://wuanrin.github.io/vue-countdown-plus/)

## Installation

```
npm install vue-countdown-plus --save
```

## Usage

### Basic

```html
<countdown-plus :time="30 * 60 * 60 * 1000" />
```

### Custom Format

```html
<countdown-plus
  :time="30 * 60 * 60 * 1000"
  format="DD ~Day, HH:mm:ss"
/>
```

### Custom Style

```html
<countdown-plus
  :time="30 * 60 * 60 * 1000"
  format="HH:mm:ss"
>
  <template v-slot="{ resolved }">
    <span class="countdown-item">{{ resolved.HH }}</span> :
    <span class="countdown-item">{{ resolved.mm }}</span> :
    <span class="countdown-item">{{ resolved.ss }}</span>
  </template>
</countdown-plus>
```

### Masual Control

```html
<div>
  <countdown-plus
    ref="countdown"
    :time="30 * 60 * 60 * 1000"
    :auto-start="false"
  />
  <div class="control-buttons">
    <button @click="start">Start</button>
    <button @click="pause">Pause</button>
    <button @click="reset">Reset</button>
  </div>
</div>
```

```js
export default {
  methods: {
    start() {
      this.$refs.countdown.start()
    },
    pause() {
      this.$refs.countdown.stop()
    },
    reset() {
      this.$refs.countdown.reset()
    }
  }
}
```

### Second Count Down

```html
<countdown-plus :time="60 * 1000" format="ss" />
```

### Events

```html
<countdown-plus
  :time="5 * 1000"
  format="ss"
  @change="handleChange"
  @finish="handleFinish"
/>
```

```js
export default {
  methods: {
    handleChange ({ currentTime, resolved, formatted }) {
      console.log(currentTime, resolved, formatted)
    },
    handleFinish () {
      console.log('finished')
    }
  }
}
```

## API

### Props

| Prop       | Description                      | Type    | Default  |
| ---------- | -------------------------------- | ------- | -------- |
| time       | Total time                       | number  | 0        |
| format     | Time format                      | string  | HH:mm:ss |
| auto-start | Whether to auto start count down | boolean | true     |

### Available formats

| Format | Description          |
| ------ | -------------------- |
| D      | Day                  |
| DD     | Day, leading zero    |
| H      | Hour                 |
| HH     | Hour, leading zero   |
| m      | Minute               |
| mm     | Minute, leading zero |
| s      | Second               |
| ss     | Second, leading zero |
| S      | Millisecond, 1-digit |
| SS     | Millisecond, 2-digit |

If you don't want to convert a unit charactor you can prefixing the character `~` before the unit character.

For example, format prop `DD Day HH:mm:ss` will be converted to `01 1ay HH:mm:ss`, the word `Day` is incorrectly converted to `1ay`.
Using `DD ~Day HH:mm:ss` can solve this problem.

### Events

| Event  | Description                      | Arguments |
| ------ | -------------------------------- | --------- |
| change | Emitted when count down changed  | { currentTime, resolved, formatted } |
| finish | Emitted when count down finished | -         |

### Slots

| Name    | Description    | SlotProps                      |
| ------- | -------------- | ------------------------------ |
| default | Custom Content | countdown, resolved, formatted |

#### SlotProps

| Name      | Type   | Description                          |
| --------- | ------ | ------------------------------------ |
| countdown | number | Remaining countdown                  |
| resolved  | object | Remaining countdown after resolving  |
| formatted | string | Remaining countdown after formatting |

`resolved` is an object contains resolved countdown according to the `format` prop.

For example, `resolved` may be `{ mm: 10, ss: 10, SS: 10 }` when `format` is `mm:ss:SS`.
So you can custom display according `resolved`.

> If an time unit is not in prop `format`, it will not be in `resolved`.

### Methods

| Name  | Description      | Attribute | Return Value |
| ----- | ---------------- | --------- | ------------ |
| start | Start count down | -         | -            |
| stop  | Stop count down  | -         | -            |
| reset | Reset count down | -         | -            |

### Attributes

| Name        | Type    | Description                          |
| ----------- | ------- | ------------------------------------ |
| currentTime | number  | Remaining countdown                  |
| resolved    | object  | Remaining countdown after resolving  |
| formatted   | string  | Remaining countdown after formatting |
| inCountdown | boolean | Whether in countdown                 |

## License

vue-countdown-plus is licensed under [The MIT License](https://github.com/wuanrin/vue-countdown-plus/blob/master/LICENSE).
