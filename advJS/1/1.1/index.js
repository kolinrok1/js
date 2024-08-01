const musicCollection = [
    {
    title: "Metora",
    artist: "LP",
    year: "2004"
    },
    {
        title: "Head",
        artist: "Melat",
        year: "2009"
    },
    {
        title: "rep",
        artist: "hip-hop",
        year: "2010"
    },
];

musicCollection[Symbol.iterator] = function() {
    return{
        current: 0,
        to: this.length,
        next(){
            return this.current < this.to ? {done: false, value: musicCollection[this.current++],} : {done:true};
                }
    }
}
for (let music of musicCollection){
    console.log(`Название альбома ${music.title}, автор ${music.artist}, год выпуска ${music.year}`);
}