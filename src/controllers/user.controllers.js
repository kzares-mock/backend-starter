const User = './details/account.json'

//reading method
const getAccountData = () => {
    const jsonData = fs.readFileSync(User)
    return JSON.parse(jsonData)
}

//writing method
const saveAccountData = (data) => {
    const dataString = JSON.stringify(data)
    fs.writeFileSync(User,dataString)
}

//creating account
const createUser = (req, res) => {
    try {
      var newUser = getAccountData() 
      const newAccount = Math.floor(100000 + Math.random() * 900000)
 
      newUser[newAccount] = req.body
      saveAccountData(newUser);
      res.send({ success: true, message: 'Student created'});
    } catch (error) {
      console.error('Error creating new user:', error);
      res.send({ error: 'Error creating new user' });
    }
  };

//reading
  const readUsers = (req, res) => {
    const accounts = getAccountData()
    res.send(accounts)
  };

//updating
const updateUser = (req, res) => {
    try {
        var updatedUser = getAccountData() 
        fs.readFile(User, '', (err, data) => {
            const accountId = req.params['id'];
            updatedUser[accountId] = req.body;
            saveAccountData(updatedUser);
            res.send('account ${accountId} updated');
        }, true);
        
      } catch (error) {
        console.error('Error updating user:', error);
        res.send({ error: 'Error updating user' });
      }   
} ;
//deleting
const deleteUser = (req, res) => {
    try{fs.readFile(User, '', (err, data) => {
        var deletedUser = getAccountData()
        const accountId = req.params['id'];
        delete deletedUser[accountId];
        saveAccountData(deletedUser);
        res.send('account ${accountId} deleted')
    }, true);
    }catch{console.error('Error deleting user:', error);
        res.send({ error: 'Error deleting user' });
      }
    
};

module.exports = {
    createUser,
    readUsers,
    updateUser,
    deleteUser,
  };

