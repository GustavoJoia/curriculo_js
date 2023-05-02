export default function dataFormat(data){
    let split = data.split('-')
    let n_data = split[2]+'/'+split[1]+'/'+split[0]

    return n_data
}