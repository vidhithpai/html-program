function showAbility(name) {
    const desc = document.getElementById("ability-description");
    let content = "";
  
    switch(name) {
      case "shock":
        content = "<h3>SHOCK BOLT</h3><p>EQUIP a bow with a shock bolt. FIRE to send an explosive bolt that damages enemies on impact. You can hold FIRE to increase distance or ALT FIRE to add bounces.</p>";
        break;
      case "recon":
        content = "<h3>RECON BOLT</h3><p>EQUIP a bow with a recon bolt. FIRE to send a sonar arrow that reveals enemies near its line of sight. Bounces can be added to reposition the arrow.</p>";
        break;
      case "drone":
        content = "<h3>OWL DRONE</h3><p>EQUIP an Owl Drone. FIRE to deploy and control the drone. You can FIRE again while controlling it to shoot a dart that reveals enemies who are hit.</p>";
        break;
      case "fury":
        content = "<h3>HUNTER’S FURY</h3><p>EQUIP a bow with three long-range energy blasts. FIRE to unleash a deadly beam that pierces through walls and damages enemies across the map.</p>";
        break;
      default:
        content = "<h3>Click an ability icon to see the description</h3>";
    }
  
    desc.innerHTML = content;
  }
  