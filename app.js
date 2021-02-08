console.log('Before');
//using callbacks
// getUser(1, (user) => {
//     console.log('user', user);
//     getRepositories(user.username, (repositories) => {
//         console.log(repositories);
//     });
// });

//using named callbacks
// getUser(1, getUserNamedCallback);

// function getUserNamedCallback(user) {
//     console.log('user', user);
//     getRepositories(user.username, getRepositoriesNamedCallback);
// }
// function getRepositoriesNamedCallback(repositories) {
//     console.log(repositories);
// }

//Using promises
// getUser(1).then((result) => {
//     console.log(result);
// });
// getRepositories('Avinash').then((result) => {
//     console.log(result);
// });
console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading from database...');
            resolve({ id: id, gitHubUsername: 'mosh' });
        }, 2000);
    });
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading repositories...');
            resolve(['repo1', 'repo2', 'repo3']);
            //reject("Error while fetching repos");
        }, 4000)
    });
}

getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => console.log('Promise approach', repos));

//using async await
async function displayRepos() {
    try {
        const user = await getUser(1);
        const pRepos = await getRepositories(user.gitHubUsername);
        console.log('Async await', pRepos)
    }
    catch (error) {
        console.log(error);
    }
}
displayRepos();