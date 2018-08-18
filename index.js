const err = msg => { throw Error( msg ) };

module.exports = (teams = [err('Teams is undefined')], actions = err('Actions is undefined')) => {
    const teamPoint = {}
    const mapPoints = {
      "Quaffle goal": 10,
      "Caught Snitch": 150,
      "default": -30
    }
    try{
      const teamGroup = teams.split("vs");
      const firstTeam = teamGroup[0].trim();
      const secondTeam = teamGroup[1].trim();
      teamPoint[firstTeam] = 0
      teamPoint[secondTeam] = 0
      const movements = actions.split(",");
      for(let element of movements){
        const actionTeam = element.split(":");
        const action = actionTeam[1].trim();
        const actionScore = mapPoints[actionTeam[1].trim()] || mapPoints['default'];
        teamPoint[actionTeam[0].trim()] += actionScore
        if(action == 'Caught Snitch'){
          break;
        }
      }
      return  `${firstTeam}: ${teamPoint[firstTeam]}, ${secondTeam}: ${teamPoint[secondTeam]}` 
    }catch(errorMsg){
      err(errorMsg);
    }
}
