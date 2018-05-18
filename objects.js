var playlist = {
  bobMarly: "is this love"
};

function updatePlaylist(playlist,artistName,songTitle) {
  Object.assign({},playlist,{[artistName]:songTitle});
}