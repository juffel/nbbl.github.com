importScripts('../core/Core.js');

self.onmessage = function(event){
    var points = event.data.points;
    var name = event.data.name;
    
    calculate(points, name);
};

function calculate(points, name) {
    
    // Berechne irgendwas
    for(var i = 0; i < 10; i++) {
        for(var j = 0; j < 30; j++) {
        
        }
    }
    
    
    // Daten zurückgeben
    self.postMessage({
        score : 222,
        more : "Point 1 - X: " + points[0].x + ", Point 1 - Y: " + points[0].y + " <br><br> Point 2 - X: " + points[1].x + ", Point 2 - Y: " + points[1].y,
        name : name
    });
}
