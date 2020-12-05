doLogin()
{
    auth=()=>{
        axiosCall();
        (
            res=>res.data,
            error=>error.info
        )
    }
    return true;
}