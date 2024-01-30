const container = document.getElementById('app')

async function fetchImgs() {
  let data = await fetch(`${import.meta.env.VITE_ServerURL}/images`)
  let result = await data.json()
  return result
}

async function makeImgs() {
  let images = await fetchImgs()
  images.forEach(image => {
    let imgTag = document.createElement('img')
    imgTag.src = image.image
    container.appendChild(imgTag)
  })
}

makeImgs()