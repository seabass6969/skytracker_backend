import { Router } from 'itty-router'

// Create a new router
const router = Router()

const init = {
    headers: {
      'content-type': 'application/json',
      "Access-Control-Allow-Origin": "*"
    },
  };

const inithtml = {
    headers:{
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*"
    }
}
router.get("/", () => {
  return new Response("why you can find this page")
})

router.get('/api/News' ,async function News(){
    const url = 'https://api.hypixel.net/skyblock/news?key=' + KEY
  const response = await fetch(url, init);
  const results = JSON.stringify(await response.json());
  return new Response(results, init);
})

router.get('/api/status/:id', async request =>{
    try {
    let finaluuid = ''
    const uuid = await fetch("https://api.mojang.com/users/profiles/minecraft/" + request.params.id)
    const uuidjson = await uuid.json()
    finaluuid = uuidjson["id"]
    const url = 'https://api.hypixel.net/status?key=' + KEY + "&uuid=" + finaluuid
  const response = await fetch(url, init);
  const results = JSON.stringify(await response.json());
  return new Response(results , init);
    }catch(err) {
        return new Response(`{"error": true}`, init);
    }
})


router.get('/api/status/', async () =>{
    return new Response(`{"error": true}`, init);
})


router.get('/api/profiles/', async () =>{
    return new Response(`{"error": true}`, init);
})

router.get('/api/profileslist/', async () =>{
    return new Response(`{"error": true}`, init);
})

router.get('/api/profiles/:id', async request =>{
    try {
    let finaluuid = ''
    const uuid = await fetch("https://api.mojang.com/users/profiles/minecraft/" + request.params.id)
    const uuidjson = await uuid.json()
    finaluuid = uuidjson["id"]
    const url = 'https://api.hypixel.net/skyblock/profiles?key=' + KEY + "&uuid=" + finaluuid
  const response = await fetch(url, init);
  const results = JSON.stringify(await response.json());
  return new Response(results , init);
    }catch(err) {
        return new Response(`{"error": true}`, init);
    }
})

//https://api.hypixel.net/player?key=API Key&uuid=Player UUID

router.get('/api/profileslist/:id', async request =>{
    try {
    let finaluuid = ''
    const uuid = await fetch("https://api.mojang.com/users/profiles/minecraft/" + request.params.id)
    const uuidjson = await uuid.json()
    finaluuid = uuidjson["id"]
    const url = 'https://api.hypixel.net/player?key=' + KEY + "&uuid=" + finaluuid
  const response = await fetch(url, init);
  const notdone = await response.json();
    const results = JSON.stringify(notdone["player"]["stats"]["SkyBlock"]["profiles"])
  return new Response(results, init);
    }catch(err) {
        return new Response(`{"error": true}`, init);
    }
})

router.get('/test/:id',async request => {
    return new Response(request.params.id + uuidjson["id"], inithtml )
})

// router.all("*", () => new Response("404, not found!", { status: 404 }))

/*
This snippet ties our worker to the router we deifned above, all incoming requests
are passed to the router where your routes are called and the response is sent.
*/
addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request))
})
