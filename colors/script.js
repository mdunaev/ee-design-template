palette.crossOrigin = "Anonymous";


function rgbToHex(r, g, b){
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) r = '0' + r;
    if (g.length == 1) g = '0' + g;
    if (b.length == 1) b = '0' + b;

    return (r + g + b).toUpperCase();
}


$('#palette').click(function(e) {
    if(!this.canvas) {

        this.canvas = $('<canvas />')[0];
        this.canvas.crossOrigin = "Anonymous";
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
    }
      var pixelData = this.canvas.getContext('2d').getImageData(event.offsetX, event.offsetY, 1, 1).data;
      var color = '#'+rgbToHex(pixelData[0], pixelData[1], pixelData[2]);
      window.prompt("Copy to clipboard: Ctrl+C, Enter", color);
  });
