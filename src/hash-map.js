function HashMap() {
  let map = new Map()

  const set = (key, value) => {
    return map.set(key,value)
  }

  const get = (key) => {
    if (!map.has(key)) return null
    return map.get(key)
  }

  return { hash, map, set, get }
}

function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
 
    return hashCode;
} 

const HashMapDude = HashMap()

HashMapDude.set('wonton',123)
console.log(HashMapDude.get('wonton'))

// console.log(HashMapDude.hash('209384u0238u40234u20348u2038u0fdu0fd'))


