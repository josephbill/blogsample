document.addEventListener("DOMContentLoaded", function(){
    const basketballPlayer = {
        name: "lebron James",
        team: "LA Lakers",
        position: "Forward",
        height: "6ft 9in", 
        pointPerGame: 27.2
    }
    
    //function a display the stats 
    function displayPlayerStats(player){
       Object.entries(player).forEach(([key,value]) => {
              console.log(`${key} : ${value}`)
       })
    }
    
    displayPlayerStats(basketballPlayer)
    
    // this function tracks my players scores across button clicks 
    function playerScorer(name){
        let points = 0
    
        return function scoreBasket(){
            points += 2
            console.log(`${name} has now scored ${points} points`)
        }
    }
    
    const lebronScore = playerScorer("Lebron James")
    
    // event handling and manipulating the DOM // clicking the game button updates the score 
    // and displays the message 
    function basketBallButton(playerName){
        let message = `${playerName} is ready to Play`
        const playerDiv = document.getElementById("playerInfo")
    
        document.getElementById("gameButton").addEventListener('click', function(){
            console.log(message)
            lebronScore() // update the score 
            playerDiv.innerHTML = `<p> ${playerName} just scored! Check console for the updated score`
        })
    }
    
    // intialize the event listener 
    basketBallButton(basketballPlayer.name)
})