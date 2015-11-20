function arr_diff (a1, a2) {

    var a = [], diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff;
};


var current_pieces = ["body", "bow", "sole", "trim", "toecap"];

var previousPieces = [];
var newChoicePieces = ["body"];

var toRemove = arr_diff(previousPieces, newChoicePieces);

console.log('To remove: ');
console.log(toRemove);

var toAdd = arr_diff(newChoicePieces, previousPieces);
console.log('To add: ');
console.log(toAdd);

current_pieces = arr_diff(current_pieces, toRemove);

console.log('CurrentPieces without removed: ');
console.log(current_pieces);

current_pieces = _.union(current_pieces, toAdd);

console.log('final pieces');
console.log(current_pieces);

previousPieces = ['body'];
newChoicePieces = ["duo-color-front", "duo-color-back"];

toRemove = arr_diff(previousPieces, newChoicePieces);

console.log('To remove: ');
console.log(toRemove);

toAdd = arr_diff(newChoicePieces, previousPieces);
console.log('To add: ');
console.log(toAdd);

current_pieces = arr_diff(current_pieces, toRemove);

console.log('CurrentPieces without removed: ');
console.log(current_pieces);

current_pieces = _.union(current_pieces, toAdd);

console.log('final pieces');
console.log(current_pieces);