# Fetch-Helper
> auto handle response after fetch

### Usage

```
import handleRes from '/path/to/module'

import {handleRes} from '/path/to/module'
```

or

```
var handleRes = require('/path/to/module')
```

```
fetch('/path/to/data')
  .then(handleRes)
  .then(res => {
    // data here.
  })
```
