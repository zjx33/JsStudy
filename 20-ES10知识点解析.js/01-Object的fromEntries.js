const entries = [['name', 'why'], ['age', 16], ['height', 188]]
const newObj = {}
for (const entry of entries) {
    newObj[entry[0]] = entry[1]
}
console.log(newObj);

// Object.fromEntries的应用场景
