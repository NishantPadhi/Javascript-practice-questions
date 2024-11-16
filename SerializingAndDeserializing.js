const input = {
  key1: 10,
  key2: {
    a: 20,
    key3: {
      c: 30,
      key4: {
        d: 40,
      },
    },
  },
};

const result = {};

const flattenObj = (input, parentKey) => {
  Object.keys(input).forEach(key => {
    const value = input[key];
    const objKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof value === 'object') {
      flattenObj(value, objKey);
    } else {
      result[objKey] = value;
    }
  });
};

flattenObj(input, '');
console.log(result);
// Output
{
  key1: 10,
  key2.a: 20,
  key2.key3.c: 30,
  key2.key3.key4.d: 40,
  key2.key3.key4.e: 50
}
