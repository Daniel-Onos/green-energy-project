const getUsers = () => {

    let users = null;

    try {
        users = JSON.parse(localStorage.getItem('users'))
    } catch (e) {
        console.log(e)
    }

    return users ? users : [];
}

const addUser = (user) => {

    let users = getUsers();

    users.push(user);

    let newUsers = JSON.stringify(users);

    try {
        localStorage.setItem('users', (newUsers));
    } catch (e) {
        console.log(e)
        return false;
    }

    return true;
}

const checkUser = (email) => {
    
    let users = getUsers();

    let existsUser = null;

    existsUser = users.find((user) => user.email === email);

    return existsUser ? true : false;

}

const getSingleUser = (email) => {

    let users = getUsers();

    let singleUser = users.find((user) => user.email === email)

    return singleUser ? singleUser : null;
}