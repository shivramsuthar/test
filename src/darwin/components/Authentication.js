class Authentication{
    registerSucessfullLogin(userid,usertype){
        localStorage.setItem('authenticatedUserId',userid)
        localStorage.setItem('authenticatedUserType',usertype)
    }
    isUserLoggedIn(){
        let user = localStorage.getItem('authenticatedUserId')
        if(user === null) {
            return false
        }
        return true
    }

}
export default new Authentication()