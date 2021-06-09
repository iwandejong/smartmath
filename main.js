var fillInTheBlank = MQ.StaticMath(document.getElementById('trinomial'));
            var a = fillInTheBlank.innerFields[0].latex() // => 'a'
            var b = fillInTheBlank.innerFields[1].latex() // => 'b'
            var c = fillInTheBlank.innerFields[2].latex() // => 'c'
            function Calculate(a,b,c) {
                var BracketAnswer = '';
                var RenderAnswer = '';
                var a = fillInTheBlank.innerFields[0].latex() // => 'a'
                var b = fillInTheBlank.innerFields[1].latex() // => 'b'
                var c = fillInTheBlank.innerFields[2].latex() // => 'c'
                var answer = ((-b + Math.sqrt(Math.pow(b,2) - (4 * a * c))) / 2 * a) * -1;
                var answer2 = ((-b - Math.sqrt(Math.pow(b,2) - (4 * a * c))) / 2 * a) * -1;
                var RoundedAnswer = answer.toFixed(2);
                var RoundedAnswer2 = answer2.toFixed(2);
                var operand1 = '(x-';
                var operand2 = ')(x-';
                if ((answer) > 0) {
                    operand1 = '(x+';
                }
                    else {
                        operand1 = '(x';
                    };
                // integer : 0,1,2,3,4 //float : 0.0,1.2,1.3
                if ((answer2) > 0) {
                    operand2 = ')(x+';    
                }
                    else {
                        operand2 = ')(x';    
                    };
                if (!((Number.isInteger(answer) || Number.isInteger(answer2)) || (Number.isInteger(answer) && Number.isInteger(answer2)))) {
                    BracketAnswer = operand1 + RoundedAnswer + operand2 + RoundedAnswer2 + ')';
                    RenderAnswer = 'x = ' + (RoundedAnswer * -1);
                    RenderAnswer2 = 'x = ' + (RoundedAnswer2 * -1);
                }
                else {
                    BracketAnswer = operand1 + Math.round(RoundedAnswer) + operand2 + Math.round(RoundedAnswer2) + ')';
                    RenderAnswer = 'x = ' + (RoundedAnswer * -1);
                    RenderAnswer2 = 'x = ' + (RoundedAnswer2 * -1);
                };
                var IDofAnswer = document.getElementById("solution");
                // alert(BracketAnswer); 
                    IDofAnswer.innerHTML = BracketAnswer;
                    MQ.StaticMath(IDofAnswer);
                
                var before = document.getElementById("FinalSolution");
                before.innerHTML = '\\therefore ' + RenderAnswer; 
                MQ.StaticMath(before);
                
                var inbetween = document.getElementById("inbetween");
                inbetween.innerHTML = '  or  ';
                MQ.StaticMath(inbetween);
                
                var FinalAnswer2 = document.getElementById("FinalSolution2");
                FinalAnswer2.innerHTML = RenderAnswer2;
                MQ.StaticMath(FinalAnswer2);
            }



// EUCLIDEAN GEOMETRY SECTION
var euclidean1 = MQ.StaticMath(document.getElementById('euclidean-geometry-field-1'));
var euclidean2 = MQ.StaticMath(document.getElementById('euclidean-geometry-field-2'));

var p1x = euclidean1.innerFields[0].latex()
var p1y = euclidean1.innerFields[1].latex()

var p2x = euclidean2.innerFields[0].latex()
var p2y = euclidean2.innerFields[1].latex()

function euclidean(p1x,p1y,p2x,p2y) {
    var p1x = euclidean1.innerFields[0].latex()
    var p1y = euclidean1.innerFields[1].latex()
    var p2x = euclidean2.innerFields[0].latex()
    var p2y = euclidean2.innerFields[1].latex()
    var gradient = ((p2y-p1y) / (p2x-p1x));
    var distance = Math.sqrt(Math.pow((p2x-p1x),2) + Math.pow((p2y-p1y),2));
    var centerx = (p2x-p1x) / 2;
    var centery = (p2y-p1y) / 2;
    var formulac = (p2y-(gradient * p2x));
    if (formulac > 0) {
        c = '+' + formulac;
    }
    else {
        c = '';
    }
    // if ((gradient === 'infinity') || (gradient === 'Infinity')) {
    //     bReal = FALSE;
    //     alert('FALSE!')
    // }
    // else {
    //     bReal = TRUE;
    // }
    var centerResult = document.getElementById("mp");
    centerResult.innerHTML = 'center=(' + centerx + ';' + centery + ')';
    MQ.StaticMath(centerResult);
    
    var distanceResult = document.getElementById("a");
    distanceResult.innerHTML = 'd=' + distance.toFixed(2) + 'units';
    MQ.StaticMath(distanceResult);

    // if (distance) {
    var gradientResult = document.getElementById("m");
    gradientResult.innerHTML = 'gradient=' + gradient;
    MQ.StaticMath(gradientResult);

    var fResult = document.getElementById("formulamxc");
    fResult.innerHTML = 'y=' + gradient + 'x' + c;
    MQ.StaticMath(fResult);
    // }
    // else {
        // var gradientResult = document.getElementById("m");
        // gradientResult.innerHTML = 'Math Error';
        // MQ.StaticMath(gradientResult);
    
        // var fResult = document.getElementById("formulamxc");
        // fResult.innerHTML = 'Math Error';
        // MQ.StaticMath(fResult);    
    // }
}