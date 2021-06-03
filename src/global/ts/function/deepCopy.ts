export default function (obj: Object) :Object {
    return JSON.parse(JSON.stringify(obj))
}