# smartmath
SmartMath is an open-source project involving fun equations, especially those used at school.\
Smartmath will continue to expand it's capabilities as the coder expands his knowledge😜

# Features
## Trinomial
Enter a,b,c, the parameters of a trinomial equation to get the two x-values.
### Formula(s)
`
var answer = ((-b + Math.sqrt(Math.pow(b,2) - (4 * a * c))) / 2 * a) * -1;
`\
`
var answer2 = ((-b - Math.sqrt(Math.pow(b,2) - (4 * a * c))) / 2 * a) * -1;
`

## Euclidean Geometry Basics
Enter 2 coordinates to calculate the gradient, distance between points, center between points and the equation in the form y = mx + c\
### Formula(s)
`
    var gradient = ((p2y-p1y) / (p2x-p1x));
    `\
`
    var distance = Math.sqrt(Math.pow((p2x-p1x),2) + Math.pow((p2y-p1y),2));
    `\
`
    var centerx = (p2x-p1x) / 2;
    `\
`
    var centery = (p2y-p1y) / 2;
    `
## Future Features
I'm working on one at a time! But here are a shortlist of the next few features to be added:\
- Differentiating
- Probability
- Functions
- Parabola, Hyperbole, etc.

### Machine Features
I'm working on some features that will appeal the visual as well as the internal functions:\
- Scalable Design systems (React or Stenciljs)
- Downsizing a function to be reusable anywhere
- Mobile compatibility
- Code performance

## External Uses
Smartmath uses MathQuill (https://github.com/mathquill/mathquill) for mathematical markdown. Otherwise, everything are just raw JS☠
