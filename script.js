let users ={

}

let count = parseInt(prompt(" istifadecilerin sayini daxil edin:"));




function getUsersDatas(){
    for( let i =0; i<count ;i++){
         
        var user = `user${i}`;
          var departments = prompt(" istifadeci departmenti daxil edin: ... , .... , ....").split(",");
        users[user] ={
              user_name : prompt( " istifadecinin adini daxil edin"),
              user_lastname : prompt("istifadecinin soyadini daxil edin:"),
               user_age : parseInt(prompt("istifadeci yasini daxil edin:")),
             user_department : departments
        }
     
       
    }
    console.log(users)
 

}

getUsersDatas();
function getOldAge(){
    maxAge=0;
    let oldestUser = null;
    for( let i=0 ;i<count ; i++){
        let currentUser = users[`user${i}`]

       if(users[`user${i}`].user_age > maxAge){
        maxAge = currentUser.user_age;
        oldestUser = currentUser;

       } 
       
       
    }
 console.log(`Ən yaşlı istifadəçi: ${oldestUser.user_name} ${oldestUser.user_lastname}, Yaş: ${oldestUser.user_age}`);
}

getOldAge();

function getUserDepartments(){
       let curentUserName = prompt("Departmentini axtardiginiz istifadecinin adini daxil edin:")
       for (let i = 0; i <count; i++) {
      

        if(users[`user${i}`].user_name.toLowerCase() == curentUserName.toLowerCase()){
            console.log(`${curentUserName} adli istifadecinin departmenti: ${users[`user${i}`].user_department}`)
        }
        
       }

}
getUserDepartments();








