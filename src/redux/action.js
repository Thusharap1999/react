export const add = (item) => {
    return{
        type:'add',
        value: item
    }
}
export const remo = (item) => {
    return{
        type:'remove',
        value: item
    }
}