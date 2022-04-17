class EncryptionMachine {
    constructor() {
        this.config = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
    }

    encrypt(word) {
        if (this.config.length <= 1000) {
            const _start = Math.floor(Math.random() * this.config.length)
            let start = _start
            let encrypted = ''
            for (let letter of word) {
                encrypted += (letter.charCodeAt(0) + this.config[start]).toString(2) + ' '
                start = start === this.config.length - 1 ? 0 : start + 1
            }
            return `${encrypted}\b-${_start}`
        } else console.log('\x1b[31mConfig is too long\x1b[0m')
    }

    decrypt(word) {
        if (this.config.length <= 1000) {
            let [encrypted, start] = word.split('-')
            start = parseInt(start)
            let decrypted = ''
            for (let letter of encrypted.split(' ')) {
                decrypted += String.fromCharCode(parseInt(letter, 2) - this.config[start])
                start = start === this.config.length - 1 ? 0 : start + 1
            }
            // remove \x00 character
            return decrypted.replace(/\x00/g, '')
        } else console.log('\x1b[31mConfig is too long\x1b[0m')
    }

    __testMachine(iterations=100, string='abcd 1234 #${}|\\|') {
        if (typeof string === 'string' && typeof iterations === 'number') {
            let i = 1
            let f = iterations
            let encryptions = []
            let same = 1
            let cor = 1
            let word = string
            while (i < f) {
                let encrypted = this.encrypt(word).split('-')[0]
                let decrypted = this.decrypt(encrypted)
                // check how many times encrypted is unique
                if (encryptions.includes(encrypted)) same++
                if (decrypted === word) cor++
                encryptions.push(encrypted)
                i++
            }
            console.log('\n\x1b[33m' + ((f+1 - same)/f * 100).toString() + '%\x1b[0m \x1b[32mof the encryptions are unique')
            console.log('\x1b[33m' + ((f+1 - cor)/f * 100).toString() + '%\x1b[0m \x1b[32mof the encryptions are correct\n')
            console.log('Total Iterations: \x1b[33m' + f + '\x1b[0m \x1b[32m\nString: \x1b[33m' + word + '\x1b[0m\n')
        } else console.log('\x1b[31mInvalid arguments\x1b[0m')
    }
}

module.exports = EncryptionMachine