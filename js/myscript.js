likesJohn = persons.likes[0]
likesJane = persons.likes[1]
likesMax = persons.likes[2]
likesMaxina = persons.likes[3]
likesAlessia = persons.likes[4]
likesDominik = persons.likes[5]
likesHarrison = persons.likes[6]
likesRami = persons.likes[7]

document.getElementById("john").innerHTML=likesJohn
document.getElementById("jane").innerHTML=likesJane
document.getElementById("max").innerHTML=likesMax
document.getElementById("maxina").innerHTML=likesMaxina
document.getElementById("alessia").innerHTML=likesAlessia
document.getElementById("dominik").innerHTML=likesDominik
document.getElementById("harrison").innerHTML=likesHarrison
document.getElementById("rami").innerHTML=likesRami

function likeJohn (){
  likesJohn = persons.likes[0] + 1
  document.getElementById("john").innerHTML=likesJohn
}

function likeJane (){
  likesJane = persons.likes[1] + 1
  document.getElementById("jane").innerHTML=likesJane
}

function likeMax (){
  likesMax = persons.likes[2] + 1
  document.getElementById("max").innerHTML=likesMax
}

function likeMaxina (){
  likesMaxina = persons.likes[3] + 1
  document.getElementById("maxina").innerHTML=likesMaxina
}

function likeAlessia (){
  likesAlessia = persons.likes[4] + 1
  document.getElementById("alessia").innerHTML=likesAlessia
}

function likeDominik (){
  likesDominik = persons.likes[5] + 1
  document.getElementById("dominik").innerHTML=likesDominik
}

function likeHarrison (){
  likesHarrison = persons.likes[6] + 1
  document.getElementById("harrison").innerHTML=likesHarrison
}

function likeRami (){
  likesRami = persons.likes[7] + 1
  document.getElementById("rami").innerHTML=likesRami
}

document.getElementById("johnDoe").innerHTML=persons.name[0] + "<br>" + persons.surname[0] + "<br>" + persons.age[0]
document.getElementById("janeDoe").innerHTML=persons.name[1] + "<br>" + persons.surname[1] + "<br>" + persons.age[1]
document.getElementById("maxMaster").innerHTML=persons.name[2] + "<br>" + persons.surname[2] + "<br>" + persons.age[2]
document.getElementById("maxinaMuster").innerHTML=persons.name[3] + "<br>" + persons.surname[3] + "<br>" + persons.age[3]
document.getElementById("alessiaCara").innerHTML=persons.name[4] + "<br>" + persons.surname[4] + "<br>" + persons.age[4]
document.getElementById("dominikLink").innerHTML=persons.name[5] + "<br>" + persons.surname[5] + "<br>" + persons.age[5]
document.getElementById("harrisonFord").innerHTML=persons.name[6] + "<br>" + persons.surname[6] + "<br>" + persons.age[6]
document.getElementById("ramiMalek").innerHTML=persons.name[7] + "<br>" + persons.surname[7] + "<br>" + persons.age[7]

document.getElementById("imgJohn").src= persons.image[0]
document.getElementById("imgJane").src= persons.image[1]
document.getElementById("imgMax").src= persons.image[2]
document.getElementById("imgMaxina").src= persons.image[3]
document.getElementById("imgAlessia").src= persons.image[4]
document.getElementById("imgDom").src= persons.image[5]
document.getElementById("imgHarrison").src= persons.image[6]
document.getElementById("imgRami").src= persons.image[7]
