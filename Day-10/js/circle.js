var topLeft = new Point(120, 50);
var rectSize = new Size(50, 50);
var rect = new Rectangle(topLeft, rectSize);
var path = new Path.Rectangle(rect, 25);

path.fillColor = 'red';
rect.strokeColor = 'red';