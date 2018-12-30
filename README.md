# call-maybe

Call a maybe function. Install like so:

```bash
yarn add call-maybe
```

Then maybe start calling functions or something:

```javascript
import { callMaybe as $$$ } from 'call-maybe'
const deny = value => !value && false
const accept = 'OK'

$$$(deny)(true)          // -> false
$$$(accept)(true)        // -> undefined
// Provide a fallback value
$$$(accept, false)(true) // -> false
// Provide a this argument
```

OK probably more useful in a context like this:

```javascript
const addEventListener = (element, ...args) => {
  element.addEventListener(...args)
  return () => element.removeEventListener(...args)
}

class MayhemComponent {
  constructor (el) {
    this.el = el
  }

  kill (target) {
    target.parentNode.removeChild(target)

    if (target === this.el) {
      this.stopComplaining = addEventListener(
        window,
        'mousemove',
        () => this.complain()
      )
    }
  }

  complain (event) {
    throw this
  }

  mount () {
    this.stopTheMadness = addEventListener(
      this.el,
      'mousemove',
      ({ target }) => this.kill(target)
    )
  }

  unmount () {
    $$$(this.removeEventListener)
    $$$(this.stopComplaining)
  }
}
```

## License

MIT
