var moment = require('moment');
var now = moment();

/*console.log(now.format('X'));
console.log(now.format('x'));*/

var timestampMoment = moment.utc(now.valueOf());
console.log(timestampMoment.local().format('h:mm a'));

//console.log(now.format('MMM Do YYYY, h:mm a'));