function sendCommand(command) {
  const ip = document.getElementById('ip').value;
  if (!ip) {
    alert("Please enter IP");
    return;
  }
  fetch(`http://${ip}/${command}`)
    .then(() => alert(`Sent: ${command}`))
    .catch(err => alert("Failed"));
}
