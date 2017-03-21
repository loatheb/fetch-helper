# Fetch-Helper
> auto handle response after fetch

### Install

```shell
npm i --save fetch-helper
```

### Usage

```js
import handleResponse from 'fetch-helper'

import {handleResponse} from 'fetch-helper'
```

or

```js
var handleResponse = require('fetch-helper')
```

```js
fetch('/path/to/data')
  .then(handleResponse)
  .then(res => {
    // data here.
  })
```
