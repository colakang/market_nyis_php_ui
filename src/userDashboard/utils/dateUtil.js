/**
 * Created by Shaochen on 1/9/2017.
 */

function formateDate(time){
  let date = new Date(time);
  let currentDate = new Date();
  if(date.getDate() == currentDate.getDate()){
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minute = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${hour}:${minute}`;
  }
  else {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }
}

export {formateDate};