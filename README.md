# EncDeEnc
**Encryption algorithm**

#### Different encryption for same stuff everytime*

* *it depends on your config, the more unique the config, the more randomized encryption for same string*

## How to use?
1. Install it using `npm`
```js
npm i encdenc
````
2. Import the package
```js
const EncryptionMachine = require('encdenc/EncryptionMachine.js')
// or
import EncryptionMachine from "encdenc/EncryptionMachine.js";
```
3. Create a new machine
```js
const machine = new EncryptionMachine();
```
4. Edit the default config (it is secure to create your own)
```js
// Array of random numbers, atmost 1000
// size and uniqueness of array ∝ randomized result for same string
machine.config = [1,3,45,23,666,44,75,999,436]
```
**Keep your config same for your project for correct results**

5. Encrypt stuff
```js
let enc = machine.encrypt("abcd 1234 #${}|\\|"))
// returns binary form of encryption, not constant for a specific input
// Test1: 10000011 1100100 1100100 10000101 1001101 1110001 1111010010011 1010101 110110 100001 1000100 1010001 10111011 1111011011110 10011110 1011110 1111101-5
// Test2: 1100010 10000011 10010000 10100100 1111010000001 1010011 110100 110100 1010101 1001101 1100011 1111010000101 10011101 1111111 1111101 1111101 10101001-0
```
6. Decrypt stuff
```js
let dec = machine.decrypt(enc)
// this always returns the correct result, no matter what the encryption is for a certain string
// Test1: abcd 1234 #${}|\\|
// Test2: abcd 1234 #${}|\\|
```
7. Check performance
```js
machine.__testMachine() // default params: iterations=100; string='abcd 1234 #${}|\\|'
// console logs uniqueness and correctness of the algorithm
// better the config, better the uniqueness

// you can edit the total iterations and test input:
machine.__testMachine(10000, "{'name': 'helloworld', 'age': '2222'}")
```
