const { uuid } = require('uuidv4');
const setUser = (users) => {
    const userName = uuid();
    const isUser = users.find(user => user.name === userName);
    if(isUser){
       setUser(users)
    }
return userName;
}
module.exports = {setUser};