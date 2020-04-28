import isPromise from 'is-promise'

function isItReallyAPromise(something){
    return isPromise(something)
}

exports.isItReallyAPromise(something) = isItReallyAPromise