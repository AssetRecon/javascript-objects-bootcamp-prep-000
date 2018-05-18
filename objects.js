var playlist = {
  bobMarly: "is this love"
};

function updatePlaylist(list,name,song) {
  Object.assign({},list,{[name]:song});
}