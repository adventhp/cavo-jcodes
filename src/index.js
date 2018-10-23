const CODES = require("../jcodes.json");

function formatCode(code) {
    let formatted = code.toString().toLowerCase();
    return formatted;
}

exports.getAll = function() {
    return Object.keys(CODES).map(key => CODES[ key ]);
};

exports.getOne = function(id) {
    const code = formatCode(id);
    return CODES[ code ];
};

exports.getMany = function(ids) {
    return ids.map(exports.getOne);
};