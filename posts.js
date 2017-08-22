var posts = {
  all: function() {
    return [{
      "id": 1,
      "content": "Test post 1",
      "user_id": 4
    },
    {
      "id": 2,
      "content": "Test post 2",
      "user_id": 3
    },
    {
      "id": 3,
      "content": "Test post 3",
      "user_id": 2
    },
    {
      "id": 4,
      "content": "Test post 4",
      "user_id": 4
    },
    {
      "id": 5,
      "content": "Test post 5",
      "user_id": 1
    },
    {
      "id": 6,
      "content": "Test post 6",
      "user_id": 3
    },
    {
      "id": 7,
      "content": "Test post 7",
      "user_id": 3
    },
    {
      "id": 8,
      "content": "Test post 8",
      "user_id": 4
    },
    {
      "id": 9,
      "content": "Test post 9",
      "user_id": 1
    },
    {
      "id": 10,
      "content": "Test post 10",
      "user_id": 2
    }]
  },
 
  searchpost: function(id){
  var list= posts.all()
  var arr=[]
  for(var i=0;i<list.length;i++){
    console.log(list[i])
    if(list[i].user_id==id){ 
    arr.push(list[i])
   }
  }
   return arr
   console.log(arr)

  },   
searchpostByid:function(id){
 var lists=posts.all() 
 var newarr
 for (var i=0;i<lists.length;i++){
   //console.log(lists[i])
   if (lists[i].id==id){
     newarr=lists[i]}
    }
  console.log(newarr)
  return newarr
  }
 
 };
 
module.exports = posts;
