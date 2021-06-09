export default function log(longFn, ...args){
    console[longFn].apply(console, ['\x1b[36m ::',...args, '\x1b[0m']);
}