

console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', () => {
        fetch('https://dog.ceo/api/breeds/image/random/4') 
        .then(resp => resp.json())
       .then(json => renderImage(json.message)) 

       return fetch('https://dog.ceo/api/breeds/list/all') 
       .then(resp => resp.json())
       .then(json => {renderBreed(Object.keys(json.message), Object.values(json.message))}) 
})
       

function renderImage(array) {
    let imageBox = document.querySelector('#dog-image-container')
    array.forEach(image => {
        let img = document.createElement('img')
        img.src = image 
        imageBox.appendChild(img)
    })
}

function renderBreed(array, array2) {
    let breedList = document.querySelector('#dog-breeds')
    array.forEach(breed => {
        let pup = document.createElement('li')
        pup.innerText = breed
       
       pup.addEventListener('click', () => colorChange(pup))

        breedList.appendChild(pup)
    })

                // This prints the second array at the bottom of the main array

                // array2.forEach(subBreed => {
                //     let subBreed1 = document.createElement('li')
                //     subBreed1.innerText = subBreed1
                //     subBreedList.appendChild(subBreed1)
                // })

}
 

function colorChange(pup){
    console.log("This should change color!")
    pup.style.color = "green"
}

function dropChange(e, array){
    filterLetter = e.target.value
    const result = array.filter(breed => breed[0] == e.target.value)
    renderBreed(result)
} 




