# Hello Cloud
*by WebMettle Systems*

Copyright (c) 2022-2025 WebMettle Systems

See the LICENSE file for copyright and distribution information.

Hello Cloud is an environment test and validation project for multiple programming languages
and Web application technologies including:

- Node / JavaScript
- Express
- Python
- GitHub Actions

Validations are performed with automated unit tests and interactive demonstrations.
The project will be extended over time with additional technologies and programming languages.

### *Production Environment Setup*

- `. ./envSetup.sh`
- `npm install --omit=dev`
- `npm list --omit=dev`
- `npm run prodStart`

### *Validating JavaScript Code*

- `npm run testJS`

### *Validating Python Code*

To manually run Python unit tests, from the python subdirectory execute:

- `npm run testPY`
- Run the helloCloud.sh script and confirm output:

```
> ./helloCloud.sh 
Hello Cloud?
Hello Cloud...
Hello Cloud.
Hello Cloud!
```
