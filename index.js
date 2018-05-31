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

function appendKitten(name){
  kittens.slice(kittens.length-1)
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  kittens.slice(0, kittens.length-1);

}
