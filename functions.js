 
	const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];

// Write a function which filter users who has  scoresGreaterThan85, 
const scoresGreaterThan85 = (users) => {
    const scores85 = users.filter((item) => item.scores > 85);
    console.log(scores85);
};

scoresGreaterThan85(users);

// 	Write a function which addUser  to the user array only if the user does not exist. 
function addUser(users, user) {
    let exists = false;
	for (let i=0; i< users.length; i++){
		if(users[i].name==user){
			exists = true;
		}
	}
	if (!exists) {
		users.push(user)
	}
}

addUser('bred'); // true, user `bred` added

// 	Write a function which addUserSkill which can add skill to a user only if the user exist.   
function addUserSkill(users, skill, username){
	for (let i=0; i < users.length; i++){
		if(users[i].name==username){
			users[i].skills.push(skill)
		}
	}
	return users;
}

// 	Write a function which editUser if the user exist in the users array.
function editUser(users, editUser, editName){
	for (let i=0; i < users.length; i++){
		if (users[i].name == editUser){
			users[i].name = editName;
		}
	}
	return users;
}
