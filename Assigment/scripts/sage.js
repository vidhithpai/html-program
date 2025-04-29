function showAbility(name) {
    const desc = document.getElementById("ability-description");
    let content = "";
  
    switch(name) {
      case "slow":
        content = "<h3>SLOW ORB</h3><p>EQUIP a slowing orb. FIRE to throw it forward, creating a field that slows and grounds players inside of it.</p>";
        break;
      case "heal":
        content = "<h3>HEALING ORB</h3><p>EQUIP a healing orb. FIRE to heal an ally over time. ALT FIRE to self-heal over time.</p>";
        break;
      case "barrier":
        content = "<h3>BARRIER ORB</h3><p>EQUIP a barrier orb. FIRE to place a solid wall. ALT FIRE to rotate the wall before placing.</p>";
        break;
      case "res":
        content = "<h3>RESURRECTION</h3><p>EQUIP a resurrection ability. FIRE with your crosshair over a dead ally to revive them with full health after a short delay.</p>";
        break;
      default:
        content = "<h3>Click an ability icon to see the description</h3>";
    }
  
    desc.innerHTML = content;
  }
  