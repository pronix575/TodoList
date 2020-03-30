class ChartsEngine {

    constructor(id) {
        this.id = id;
    }

    initValues(values) {
        this.values = values
    }

    clear() {
        this.ctx.clearRect(0, 0, props.width, props.height);
    }

    renderChart() {
        const canvas = document.getElementById(this.id),
            ctx = canvas.getContext('2d'),
            start = 80,
            startY = 35,
            props = {
                "height": canvas.height,
                "width": canvas.width - start,
                computedHeight: (max, value, height) => (value - min_of_values) / (max - min_of_values) * (height - startY - 5) + startY,
            },
            gradient = ctx.createLinearGradient(props.height, 0, props.height, props.height);

        const max_of_values = max(this.values),
            min_of_values = min(this.values);

        console.log(min_of_values)

        gradient.addColorStop(0, applicationState.settings.backgroundColor.color)
        gradient.addColorStop(1, "rgb(0,0,0,.0)");

        ctx.fillStyle = gradient;
        ctx.lineWidth = 5;

        ctx.beginPath();

        var step = props.width / (this.values.length - 1);


        var allWay = start;
        var i = 0;

        ctx.beginPath()

        while (i < this.values.length + 1) {
            let value_changes = props.height - props.computedHeight(max_of_values,
                this.values[i], props.height, min_of_values);

            ctx.lineTo(allWay, value_changes);
            allWay += step;
            i++;
        }

        ctx.lineTo(allWay, props.height)
        ctx.lineTo(start, props.height)
        ctx.fill();
        ctx.strokeStyle = applicationState.settings.backgroundColor.color;

        var allWay = start;
        var i = 0;

        ctx.beginPath()

        while (i < this.values.length + 1) {
            let value_changes = props.height - props.computedHeight(max_of_values,
                this.values[i], props.height, min_of_values);

            ctx.lineTo(allWay, value_changes);
            allWay += step;
            i++;
        }

        ctx.stroke();

    }
    renderValueLines() {
        const canvas = document.getElementById(this.id),
            ctx = canvas.getContext('2d'),
            props = {
                "height": canvas.height,
                "width": canvas.width
            },
            startY = 35,
            amountOfLines = 4;

        function getLineValues(amountOfLines, values, max, min) {
            var values = [],
                currentValue = max,
                step = ((currentValue - min) / amountOfLines).toFixed(2);

            for (let i = 0; i < amountOfLines; i++) {
                values.push(currentValue.toFixed(2));
                currentValue -= step;
            }

            return values
        }
        var lineValues = getLineValues(amountOfLines, this.values, max(this.values), min(this.values));

        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.4;

        ctx.fillStyle = "rgb(255,255,255,0.8)";
        ctx.font = "20px Product Sans";

        var allWay = 1,
            step = (props.height - startY - 2) / amountOfLines;

        for (let i = 0; i < amountOfLines; i++) {
            ctx.beginPath();
            ctx.lineTo(0, allWay);
            ctx.lineTo(props.width, allWay);
            ctx.stroke();
            ctx.fillText(lineValues[i], 0, allWay + 20);

            allWay += step;
        }
    }
    renderDateTime() {
        
    }
    render() {
        this.renderValueLines();
        this.renderChart();
        this.renderDateTime();
    }
}