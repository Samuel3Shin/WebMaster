// var members = ['egoing', 'k8805', 'hoya'];

// var roles = {
//     'programmer':'egoing',
//     'designer':'k8805',
//     'manager':'hoya'
// }

// for(var x in roles){
//     console.log(x);
//     console.log(roles[x]);
// }

var foo = () => {
    console.log("sam");
}


var q = {
    v1:'v1',
    v2:'v2',
    f1:foo,
    f2:function(){
      console.log(this.v2);
    }
  }
   
q.f1();
q.f2();