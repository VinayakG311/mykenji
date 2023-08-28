// @ts-nocheck
function getOrSetItem(key:string, value = ''):any {
	let db = localStorage;
	if (db.getItem(key) == null) {
		db.setItem(key, JSON.stringify(value));
	} else {
		return JSON.parse(db.getItem(key));
	}
	return value;
}
function getItemValue(key): any | null {
	let db = localStorage;
	if (db.getItem(key) !== null) {
		return JSON.parse(db.getItem(key));
	}
	return null;
}

function setItemValue(key, value = '') {
	let db = localStorage;
	if (key !== null) {
		db.setItem(key, JSON.stringify(value));
		return value;
	} else return null;
}
function clearDB() {
	let db = localStorage;
	db.clear();
}

export  {
	getItemValue,
	getOrSetItem,
	setItemValue,
	clearDB
};
