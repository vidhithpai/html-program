function showAbility(name) {
    const desc = document.getElementById("ability-description");
    let content = "";
  
    switch(name) {
      case "curveball":
        content = "<h3>CURVEBALL</h3><p>EQUIP a flare orb that curves left or right. FIRE to blind any players who see the orb after a short delay.</p>";
        break;
      case "hothands":
        content = "<h3>HOT HANDS</h3><p>EQUIP a fireball. FIRE to throw it. It explodes on impact or after a delay, damaging enemies and healing Phoenix.</p>";
        break;
      case "blaze":
        content = "<h3>BLAZE</h3><p>EQUIP a flame wall. FIRE to create a wall of fire that blocks vision and damages players passing through. You can bend it during casting.</p>";
        break;
      case "run":
        content = "<h3>RUN IT BACK</h3><p>INSTANTLY place a marker at Phoenix’s location. If killed during the ability’s duration, he is reborn at the marker with full health.</p>";
        break;
      default:
        content = "<h3>Click an ability icon to see the description</h3>";
    }
  
    desc.innerHTML = content;
  }
  