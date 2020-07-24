if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');   
} else {
    module.exports = require('./dev');
}

// prod Google id
//180243509779-r32s8loe25sgbv78fpghikheu1m3mge6.apps.googleusercontent.com
// prod google secret: 6sZ1mxHJ9fbwIPy49rfqLt86