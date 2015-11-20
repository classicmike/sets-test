var current_pieces = ["body", "bow", "sole", "trim", "toecap"];

var previousPieces = ["bow", "toecap"];
var newChoicePieces = [];

var toRemove = _.difference(previousPieces, newChoicePieces);

console.log('To remove: ');
console.log(toRemove);

var toAdd = _.difference(newChoicePieces, previousPieces);
console.log('To add: ');
console.log(toAdd);

current_pieces = _.difference(current_pieces, toRemove);

console.log('CurrentPieces without removed: ');
console.log(current_pieces);

current_pieces = _.union(current_pieces, toAdd);

console.log('final pieces');
console.log(current_pieces);

previousPieces = ['body'];
newChoicePieces = ["duo-color-front", "duo-color-back"];

toRemove = _.difference(previousPieces, newChoicePieces);

console.log('To remove: ');
console.log(toRemove);

toAdd = _.difference(newChoicePieces, previousPieces);
console.log('To add: ');
console.log(toAdd);

current_pieces = _.difference(current_pieces, toRemove);

console.log('CurrentPieces without removed: ');
console.log(current_pieces);

current_pieces = _.union(current_pieces, toAdd);

console.log('final pieces');
console.log(current_pieces);