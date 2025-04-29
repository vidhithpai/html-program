function showAbility(name) {
    const desc = document.getElementById("ability-description");
    let content = "";
  
    switch(name) {
      case "cloudburst":
        content = "<h3>CLOUDBURST</h3><p>INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.</p>";
        break;
      case "updraft":
        content = "<h3>UPDRAFT</h3><p>INSTANTLY propel Jett high into the air, allowing access to elevated areas or quick escapes.</p>";
        break;
      case "tailwind":
        content = "<h3>TAILWIND</h3><p>INSTANTLY dash a short distance in the direction you're moving. Can be used for repositioning or dodging attacks.</p>";
        break;
      case "bladestorm":
        content = "<h3>BLADE STORM</h3><p>EQUIP a set of highly accurate throwing knives that recharge on kills. FIRE to throw a single knife. ALT FIRE to throw all remaining knives at once.</p>";
        break;
      default:
        content = "<h3>Click an ability icon to see the description</h3>";
    }
  
    desc.innerHTML = content;
  }
  