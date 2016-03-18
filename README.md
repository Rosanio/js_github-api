# Git Githubbers

##### Epicodus code review 3/18/16

##### Author Name
Matt Rosanio

## Description
This website will allow users to enter a github username and view information from their profile, including the names and descriptions of all repositories they have created.

## Setup

Clone this repository:
```
$ cd ~/Desktop
$ git clone https://github.com/Rosanio/js_github-api
$ cd js_github-api
```

If you haven't already, install node.js from https://nodejs.org/en/download/. Then, setup and run npm in the terminal:
```
$ npm init
$ npm install
```

Run bower in the terminal:
```
$ bower install
```

You may need to specifically tell node to install browser-sync:
```
$ npm install browser-sync --save-dev
```

Finally, run gulp in the terminal and you will be able to open index.html normally:
```
$ gulp build
```

If you have a github account, it is recommended to use an api key to get full access to this site. You can still use this site without an api key, but you will be limited to making 60 calls an hour.

To generate an api key on github, go to the settings page from your account home. Select Personal Access Tokens from the sidebar on the left, and click the Generate New Token button in the upper-right. Don't check any of the boxes and click Generate Token.

Now, you will need to make a new file in the parent directory titled .env. In it, include the following line of code:
```
exports.apiKey = 'YOUR_API_KEY_HERE';
```

## Legal

Copyright (c) 2016 Matt Rosanio

This software is licensed under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
