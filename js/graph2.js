//Flot Multiple Axes Line Chart
$(function() {
    var oilprices =     [ [1167606000000, 0], [1167778800000, 4], [1167779800000, 12], [1167778800000, 16], [1167778800000, 22] ];
    var exchangerates = [ [1167606000000, 0], [1167692400000, 2], [1167692400000, 11], [1167692400000, 12], [1167692400000, 18]
    ];



    function doPlot(position) {
        $.plot($("#flot-line-chart-multi"), [{
            data: oilprices,
            label: "Schuppenkarpfen"
        }, {
            data: exchangerates,
            label: "Sonstige Fänge",
            yaxis: 1
        }], {
            xaxes: [{
                mode: 'time'
            }],
            yaxes: [{
                min: 0
            }],
            legend: {
                position: 'sw'
            },
            colors: ["#1ab394", "#23c6c8"],
            grid: {
                color: "#999999",
                hoverable: true,
                clickable: true,
                tickColor: "#D4D4D4",
                borderWidth:0,
                hoverable: true //IMPORTANT! this is needed for tooltip to work,

            },
            tooltip: true,
            tooltipOpts: {
                content: "%y: %s",
                xDateFormat: "%0m",

                onHover: function(flotItem, $tooltipEl) {
                    // console.log(flotItem, $tooltipEl);
                }
            }

        });
    }

    doPlot("right");

    $("button").click(function() {
        doPlot($(this).text());
    });
});