reactive-ie8-shims
==================

Shims to make reactive work in IE8.

## Shims

- [ECMAScript 5](https://www.npmjs.org/package/es5-shim)
- [`addEventListener`](https://github.com/WebReflection/ie8)
- [`element.classList`](http://purl.eligrey.com/github/classList.js)
- `[].slice.call(NodeList)` slice doesn't work on element node lists in IE8, so I shimmed it to copy to a javascript array first.
- [`element.textContent`](https://gist.github.com/joshrhoades/8874249)


## Use

```html
<!--[if IE 8]>
  <script src="/path/to/reactive-ie8-shims.min.js"></script>
<![endif]-->
```

Or you can `browserify` it:

```
require('reactive-ie8-shims')
```

## License

MIT in [LICENSE](/yanatan16/reactive-ie8-shims/LICENSE) file.