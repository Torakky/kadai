const profile = {
    name: 'Yoshida',
    age:20,
    hobby: 'watching baseball game',
    major: 'Japanese history',
    gender: 'Male',
    hometown: 'Kyoto'
}
const keys = Object.keys(profile)
console.log(keys)

for (let index = 0; index < keys.length; index = index + 1) {
    const key = keys[index];
    console.log('私の ' + key + '　は　'　+ profile[key] + '　です。　')
}