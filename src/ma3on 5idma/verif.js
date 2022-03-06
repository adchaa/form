function letterOnlyCheck(ch)
{
   var regEx = /^[A-Za-z]+$/;
   return ch.match(regEx);   
}

function verif(data)
{
    var v=[];
    if(!letterOnlyCheck(data.frist_Name))
    {
        v.push("frist name must contain only letters");

    }
    if(!letterOnlyCheck(data.last_Name))
    {
        v.push("last name must contain only letters");
    }
    if(data.Username.length===0)
    {
        v.push("Username is required");
    }
    return v;
}
export default verif;