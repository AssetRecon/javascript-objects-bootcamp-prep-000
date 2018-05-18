var playlist = {
  bobMarly: "is this love"
};

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({},playlist,{[artistName]:songTitle})}