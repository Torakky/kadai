
// サーバーからデータをとってくる
const jsonstring = '{name:"Yoshida", "tweet": 500, "follows": 100, "follower": 50}'



let userdata
try {
    JSON.parse('{a: 1')
} catch (error) {
  console.log("異常なJSONです")
}  
console.log()