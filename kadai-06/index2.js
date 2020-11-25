try {
    const str1 = "abc"
    JSON.parse(str1)
} catch (error) {
    //　正しいJSONではないのでパースできない。
    //　文字列だけのJSONは、ダブルクオーテーションで囲む必要がある。
    //　正しくはconst str1 = '"abc"'のようなJSON文字列になる。
    console.log(error)
}
try{
    const str2 = "'abc'"
    JSON.parse(str2)
} catch(error) {
    //JSONでの文字列はシングルクオートではなくダブルクオートで囲む必要がある。 
} 

const str3 = '"abc"'
JSON.parse(str3)