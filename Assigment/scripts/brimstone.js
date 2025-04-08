function showAbility(name) {
    const desc = document.getElementById("ability-description");
    let content = "";
  
    switch(name) {
      case "incendiary":
        content = "<h3>INCENDIARY</h3><p>EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to rest on the floor, creating a lingering fire zone that damages players within the zone.</p>";
        break;
      case "stim":
        content = "<h3>STIM BEACON</h3><p>EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, it creates a field that grants players RapidFire.</p>";
        break;
      case "smokes":
        content = "<h3>SKY SMOKES</h3><p>EQUIP a tactical map. FIRE to set locations where smoke clouds will land. ALT FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.</p>";
        break;
      case "orbital":
        content = "<h3>ORBITAL STRIKE</h3><p>EQUIP a tactical map. FIRE to launch a lingering orbital strike that pulses for high damage over several seconds.</p>";
        break;
      default:
        content = "<h3>Click an ability icon to see the description</h3>";
    }
  
    desc.innerHTML = content;
  }
  