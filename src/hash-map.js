function HashMap() {
  // capacity determines the amount of buckets available
  // hashCode
  let capacity = 16;
  let loadFactor = 0.75;

  // grows capacity
  let growCapacity = () => {
    return (capacity *= 2);
  };

  // create the map part of the hashmap
  let map = new Map();

  const createBuckets = () => {
    let i = 0;
    while (i < capacity) {
      if (map.get(i)) {
        i++;
        continue;
      }
      map.set(i, new Map());
      i++;
    }
  };

  // hash uses the capacity property to determine
  // how many buckets it should be distributing to
  const hash = (key) => {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  };

  // make a array of the current entries,
  // then clear the map, and rehash
  // all values using the array
  const rehash = () => {
    let clonedList = entries();
    clear();
    clonedList.forEach((entry) => {
      set(entry[0], entry[1]);
    });
  };

  // set enter the key value pair into the hashmap.
  const set = (key, value) => {
    // create a hash code
    const hashCode = hash(key);

    // if the bucket contains a preexisting key
    // then overwrite it
    if (map.get(hashCode).has(key)) {
      map.get(hashCode).set(key, value);
    }

    // otherwise, map a new key value pair
    map.get(hashCode).set(key, value);

    // if the entry exceeds load capacity,
    // then grow buckets and rehash the old entries
    if (length() > capacity * loadFactor) {
      growCapacity();
      createBuckets();
      rehash();
      return;
    }
  };

  // retrieve value based on given key
  const get = (key) => {
    // generate hashcode from key
    const hashCode = hash(key);

    // if the bucket doesn't have the value
    // return null
    if (!map.get(hashCode).has(key)) return null;

    // if it does, return the value
    return map.get(hashCode).get(key);
  };

  // checks the hashmap to see if the key
  // exists within it and returns true/false
  const has = (key) => {
    let returnValue = false;
    for (const bucket of map) {
      if (bucket[1].has(key)) {
        returnValue = true;
        break;
      }
    }
    return returnValue;
  };

  // removes the specified key from the hashmap
  // and returns true, returns false if it doesn't exist
  const remove = (key) => {
    let valueDeleted = false;
    for (const bucket of map) {
      if (bucket[1].has(key)) {
        bucket[1].delete(key);
        valueDeleted = true;
        break;
      }
    }
    return valueDeleted;
  };

  // returns the number of stored keys in hashmap
  const length = () => {
    let length = 0;

    for (const bucket of map) {
      length += bucket[1].size;
    }

    return length;
  };

  //removes all entries from hashmap
  const clear = () => {
    for (const bucket of map) {
      bucket[1].clear();
    }
  };

  // returns an array containing all keys
  const keys = () => {
    let keyArray = [];
    for (const bucket of map) {
      const bucketArray = Array.from(bucket[1].keys());
      keyArray = keyArray.concat(bucketArray);
    }
    return keyArray;
  };

  // returns an array containing all keys
  const values = () => {
    let valuesArray = [];
    for (const bucket of map) {
      const bucketArray = Array.from(bucket[1].values());
      valuesArray = valuesArray.concat(bucketArray);
    }
    return valuesArray;
  };

  const entries = () => {
    let entriesArray = [];
    for (const bucket of map) {
      const bucketArray = Array.from(bucket[1].entries());
      entriesArray = entriesArray.concat(bucketArray);
    }
    return entriesArray;
  };

  createBuckets();

  return {
    hash,
    map,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}
