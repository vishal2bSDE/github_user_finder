//Initialize Github class
const github=new GitHub();
//Initialize UI
const ui=new UI();
//Search input
const searchUser=document.getElementById("searchUser");
//event listener
searchUser.addEventListener("keyup",(event)=>{
    //get input text
    const userText=event.target.value;
    if(userText!=="")
    {
        //console.log(userText);
        //Make http call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message==="Not Found")
            {
                //show ALert
                ui.showAlert("User Not Found","alert alert-danger");
                ui.clearProfile();
            }else{
            // console.log(data);
            ui.showProfile(data.profile);
            ui.showRepos(data.repos);
        }
        })
    }else{
        ui.clearProfile();
    }
})