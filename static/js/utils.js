/**
 * Created by Gatsby on 2017/6/5.
 */
//演员名字拼接
function convertToCastString(casts){
  var castsjoin='';
  for(var index in casts){
    castsjoin=castsjoin+casts[index].name+"/";
  }
  return castsjoin.substring(0,castsjoin.length-2);
}
//影人信息
function converToCastInfos(casts){
  var castsArray=[];
  for(var index in casts){
    var cast={
      img: casts[index].avatars ? casts[index].avatars.large : "",
      name:casts[index].name
    }
    castsArray.push(cast)
  }
  return castsArray;
}
//评分
function convertToStarsArray(stars){
  var num=stars.toString().substring(0,1)
  var array=[];
  for(var i=1;i<=5;i++){
    if(i<=num){
      array.push(1);
    }else{
      array.push(0)
    }
  }
  return array;
}