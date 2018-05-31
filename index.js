const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push("Ralph")
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift("Bob")
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(){
return [...kitens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  kittens.slice(kittens.length-1);

}
