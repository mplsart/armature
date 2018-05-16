const prod = process.env.NODE_ENV === 'production';

console.log("WHAT THE FUCK?");
console.log(prod);
// This is needed for docs to compile with the gh-pages route prefix
// See: https://github.com/zeit/next.js/issues/3335
module.exports = {'process.env.BACKEND_URL': prod? '/armature' : '' };