function getProjects(){
    const urlGitHub = 'https//api.github.com/users/MirandaDiego/repos'
    var loadingElement = document.getElementById('loading')

    fetch(urlGitHub,{
        method: 'GET'
})
.then((Response) => Response.json())
.then((Response) => {
    loadingElement.style.display = 'none'
    showProjects(response)
})
.catch((e) => {
    console.log(e)
})
}
function showProjects(data){

}

getProjects()