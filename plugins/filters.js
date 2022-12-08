import  Vue  from  "vue";

Vue.filter("formatDate",  function(date)  {
    date = new Date(Date.parse(date))
    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    
    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;
    
    return dd + '.' + mm + '.' + yy;
});
  
Vue.filter("cutText",  function(text,  length,  suffix)  {
    if  (text.length  >  length)  {
        return  text.substring(0,  length)  +  suffix;
    }  else  {
        return  text;
    }
});