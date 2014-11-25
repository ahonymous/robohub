function Robohub() {
    var directions = [
            ['east', 'west'],
            ['north', 'south']
        ],
        vocabulary = [
            '<h1>If you need my help, than click the "HELP" button.</h1>',
            '<h1>I can help you get out of the maze.</h1>',
            '<h1>My name is Robik!</h1>',
            '<h1>Hello!</h1>'
        ],
        that = this;

    function loadMap(robo) {
        return map().split("\n").filter(function (val) {
            if (val.length) {
                return val;
            }
        }).map(function (val, indY) {
            var out = val.split('');

            if (out.indexOf("@") > -1) {
                robo.startPosition = [out.indexOf("@"), indY];
            }

            if (out.indexOf("*") > -1) {
                robo.endPosition = [out.indexOf("*"), indY];
            }

            return out;
        });
    }

    this.speak = function () {
        setTimeout(function () {
            if (vocabulary.length) {
                document.getElementById("out").innerHTML = vocabulary.pop();

                return that.speak();
            } else {
                return document.getElementById("help").style.display = '';
            }

        }, 3000);

    };

    this.step = function () {
        var steps = [];
        if (!that.currentMap) {
            return false;
        }


    };

    this.currentMap = loadMap(this);
    this.speak();
}
