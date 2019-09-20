function songDecoder(song){
  let oldSong = song.replace(/WUB/g, ' ');
  oldSong = oldSong.replace(/\s\s+/g, ' ');
  if(oldSong[0] === ' '){ 
    console.log(oldSong[0], 'here')
    oldSong = oldSong.replace(/\s/, ''); 
  }
  if(oldSong[oldSong.length-1] === ' '){
    oldSong = oldSong.replace(/\s$/, '');
  }
  return oldSong;
}

console.log(songDecoder('WUBAWUBBWUBCWUB'));