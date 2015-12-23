
//Flot Pie Chart
$(function() {

    var data = [{
        label: "Karpfen",
        data: 5,
        color: "#1ab394",
    }, {
        label: "Wels",
        data: 1,
        color: "#23c6c8",
    }, {
        label: "Hecht",
        data: 3,
        color: "#ed5565",
    }, {
        label: "Zander",
        data: 4,
        color: "#1c84c6",
    }, {
        label: "Sonstige",
        data: 8,
        color: "#f8ac59",
    }];

    var plotObj = $.plot($("#flot-pie-chart"), data, {
        series: {
            pie: {
                show: true
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: true,
        tooltipOpts: {
            content: "%p.0%, %s", // show percentages, rounding to 2 decimal places
            shifts: {
                x: 20,
                y: 0
            },
            defaultTheme: false
        }
    });

});
