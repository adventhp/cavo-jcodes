const CODES = require("../jcodes.json");

function formatCode(code) {
    let formatted = code.toString().toLowerCase();
    return formatted;
}

function getAll () {
    return Object.keys(CODES).map(key => CODES[ key ]);
}

function getOne (id) {
    const code = formatCode(id);
    return CODES[ code ];
}

function getMany (ids) {
    return ids.map(getOne);
}

module.exports = {
    getAll,
    getOne,
    getMany
};