Change ownership of a whole bunch of github repos in a hurry.

```
npm install
cp config-example.js config.js
vi config.js
[change the token to YOUR token]
node app
```

Boom! It's very fast.

If it encounters any errors it will stop; see the output to figure out which one failed (the last one), fix your tpo and comment out those prior to it, as they will fail too on the next try if they have already been moved successfully.

Yes, github leaves a trail of redirects behind. Don't recreate the repos in the original org though; that will break the redirects.

No, silly, there is NO warranty. Use at your own risk. It worked for us when we needed to move zillyuns of Apostrophe modules.

Copyright (c) 2020 Apostrophe Technologies, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


