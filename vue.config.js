const publicPath = process.env.NODE_ENV === 'production' ? '/test/' : '/'
module.exports = {
    publicPath: publicPath,
}