function gameObject() {
    return{
    home: {
        teamName: 'Brooklyn Nets',
        colors: ['Black, White'],
        players: {
            'Alan Aderson':{
                'Number': 0,
                'Shoe': 16,
                'Points': 22,
                'Rebouds': 12,
                'Assists': 12,
                'Steals': 3,
                'Blocks': 1,
                'Slam Dunks': 1,
            },
            'Reggie Evans':{
                'Number': 30,
                'Shoe': 14,
                'Points': 12,
                'Rebouds': 12,
                'Assists': 12,
                'Steals': 12,
                'Blocks': 12,
                'Slam Dunks': 7,
                
            },
            'Brook Lopez':{
                'Number': 11,
                'Shoe': 17,
                'Points': 17,
                'Rebouds': 19,
                'Assists': 10,
                'Steals': 3,
                'Blocks': 1,
                'Slam Dunks': 15,
            },
            'Mason Plumlee':{
                'Number': 1,
                'Shoe': 19,
                'Points': 26,
                'Rebouds': 12,
                'Assists': 6,
                'Steals': 3,
                'Blocks': 8,
                'Slam Dunks': 5,
            },
            'Jason Terry':{
                'Number': 31,
                'Shoe': 15,
                'Points': 19,
                'Rebouds': 2,
                'Assists': 2,
                'Steals': 4,
                'Blocks': 11,
                'Slam Dunks': 1,
            },
        }        

    },

    away: {
        teamName: 'Charlotte Hornets',
        colors: ['Turquoise, Purple'],
        players: {
            'Jeff Adrien':{
                'Number': 4,
                'Shoe': 18,
                'Points': 10,
                'Rebouds': 1,
                'Assists': 1,
                'Steals': 2,
                'Blocks': 7,
                'Slam Dunks': 2,
            },
            'Bismak Biyombo':{
                'Number': 0,
                'Shoe': 16,
                'Points': 12,
                'Rebouds': 4,
                'Assists': 7,
                'Steals': 7,
                'Blocks': 15,
                'Slam Dunks': 10,
            },
            'DeSagna Diop':{
                'Number': 2,
                'Shoe': 14,
                'Points': 24,
                'Rebouds': 12,
                'Assists': 12,
                'Steals': 4,
                'Blocks': 5,
                'Slam Dunks': 5,
            },
            'Ben Gordon':{
                'Number': 8,
                'Shoe': 15,
                'Points': 33,
                'Rebouds': 3,
                'Assists': 2,
                'Steals': 1,
                'Blocks': 1,
                'Slam Dunks': 0,
            },
            'Brendan Haywood':{
                'Number': 33,
                'Shoe': 15,
                'Points': 6,
                'Rebouds': 12,
                'Assists': 12,
                'Steals': 22,
                'Blocks': 5,
                'Slam Dunks': 12,
            }
        }
    }
}
}
     

function homeTeam(){
    return gameObject().home
}

function awayTeam(){
    return gameObject().away
}
function players(){
  return Object.assign({}, homeTeam().players, awayTeam().players)
}


function numPointsScored(playerInput){
  // debugger
   return players()[playerInput].Points
  
}    

console.log('haywood number of points', numPointsScored('Brendan Haywood'))
console.log('points', numPointsScored('Jeff Adrien'))

function shoeSize (playerInput){
    debugger
    return players()[playerInput].Shoe
}
console.log('shoe size', shoeSize('Jeff Adrien'))

function teamColors(name){
    if (homeTeam().teamName=== name){
        return homeTeam().colors
    }
    else return awayTeam().colors
}  
console.log('team colors', teamColors('Charlotte Hornets'))

const hTeam = gameObject().home
const aTeam = gameObject().away

function teamNames() {
   return [hTeam.teamName, aTeam.teamName]
}
console.log(teamNames())

// Create a new and empty array
// Looping through all the players in the player object
// Add each player number to an array
// Return array
function playerNumbers(name){
    const jerseyNumbers= []
    if (homeTeam().teamName=== name){
        for (const player in homeTeam().players){
            jerseyNumbers.push(player.Number)
        }
    }
    else {
        for (const player in awayTeam().players){
            jerseyNumbers.push(player.Number)
        }
    }
return jerseyNumbers
}
console.log(playerNumbers('Charlotte Hornets'))

