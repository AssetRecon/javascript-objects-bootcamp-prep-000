var playlist = {
  bobMarly: "is this love"
};

function updatePlaylist(playlist,artistName,songTitle) {
  playlist.artistName = songTitle;
  return playlist
}

console.log(updatePlaylist(playlist,"Phill","slowdice"))