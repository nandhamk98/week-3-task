let jsonObj = {
    "Title": "resume",
    "Presonal-info":{
        "Name": "Nandhakumar M K",
        "Date of Birth" : "25/08/1998",
        "Nationality": "Indian",
        "E-mail": "nandhakumarmk98@gmail.com",
        "Employment status" : "working",
        "marital status" : "Single"
    },
    "career":{
        "Role" : "Associate Quality Assurance Engineer",
        "Place": "Bangalore"
    },    
    "Hobbies": ["football","movies","travelling"]
};


let jsonKeys = Object.keys(jsonObj);

//traversing through for loop
for(let i = 0 ; i < jsonKeys.length ; i++){ 
    console.log(jsonKeys[i]," : ",jsonObj[jsonKeys[i]]);
}

//traversing through for-in loop
for(let obj in jsonObj){
    console.log(obj,' : ',jsonObj[obj]);
}

//travsing through for-of loop
for(let obj of jsonKeys){
    console.log(obj, ' : ',jsonObj[obj]);
}

//travsing through forEach loop
jsonKeys.forEach(function(keys){
    console.log(keys,' : ',jsonObj[keys]);
})

/*
output:

Title  :  resume
Presonal-info  :  {
  Name: 'Nandhakumar M K',
  'Date of Birth': '25/08/1998',
  Nationality: 'Indian',
  'E-mail': 'nandhakumarmk98@gmail.com',
  'Employment status': 'working',
  'marital status': 'Single'
}
career  :  { Role: 'Associate Quality Assurance Engineer', Place: 'Bangalore' }
Hobbies  :  [ 'football', 'movies', 'travelling' ]
*/