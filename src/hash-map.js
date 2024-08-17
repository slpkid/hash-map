function HashMap() {
  // create the map part of the hashmap
  let map = new Map();

  const hash = (key) => {
    let hashCode = 0;
  
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
  
    return hashCode;
  }

  // set enter the key value pair into the hashmap.
  const set = (key, value) => {

    // create a hash code
    const hashCode = hash(key);
    
    // check to see if there is a bucket
    // if not, create one and 
    // map the key value pair to it
    if (!map.get(hashCode)) {
      const bucket = new Map()
      map.set(hashCode, bucket)
      bucket.set(key, value)
      return
    }

    // if the bucket contains a preexisting key
    // then overwrite it
    if (map.get(hashCode).has(key)) {
      map.get(hashCode).set(key,value)
    }

    // otherwise, map a new key value pair
    map.get(hashCode).set(key,value)
  };
  
  // retrieve value based on given key
  const get = (key) => {
    // check check the hashcode and search through
    // the bucket to see if the key exists.

    // generate hashcode from key
    const hashCode = hash(key)

    // if not, return null
    if (!map.get(hashCode).has(key)) return null

    // if it does, return the value
    return map.get(hashCode).get(key)
  };

  return { hash, map, set, get };
}

const HashMapDude = HashMap();

// console.log(HashMapDude.get("wonton"));
HashMapDude.set("wonton", 123);
// console.log(HashMapDude.get("wonton"));
HashMapDude.set("wontonniner", "I want to be a butterfly");
// console.log(HashMapDude.get("wonton"));
// console.log(HashMapDude.map)
HashMapDude.set('peter dinklage 4', 420)
HashMapDude.set('georgecloney129', 666)
console.log(HashMapDude.map)
HashMapDude.set('georgecloney129', 720) // rewrite value from 666 to 6666
HashMapDude.set('apple', 'red')
HashMapDude.set('banana', 'yellow')
HashMapDude.set('carrot', 'orange')
HashMapDude.set('dog', 'brown')
HashMapDude.set('elephant', 'gray')
HashMapDude.set('frog', 'green')
HashMapDude.set('grape', 'purple')
HashMapDude.set('hat', 'black')
HashMapDude.set('ice cream', 'white')
HashMapDude.set('jacket', 'blue')
HashMapDude.set('kite', 'pink')
HashMapDude.set('lion', 'golden')
console.log(HashMapDude.map)
// HashMapDude.set("hugh", 321);
// console.log(HashMapDude.get("hugh"));
// HashMapDude.set("butcher", 321);
// console.log(HashMapDude.get("butcher"));

// console.log(HashMapDude.hash('209384u0238u40234u20348u2038u0fdu0fd'))
