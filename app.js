//function to generate random data for line chart
function getrand(min, max, leng) {
    var arr = []
    while (arr.length < leng) {
        var rand = Math.floor(Math.random() * (max - min)) + min
        if (arr.indexOf(rand) === -1) arr.push(rand);
    }
    return arr;
}


$(document).ready(function () {
    // search to filter list
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList a").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    //clear search input and reset list 
    $("#clear").click(function () {
        $('#myInput').val("").trigger("keyup").focus();
    });

    //on reload, set ids to "Topic 1"
    document.getElementById("scatter").innerText = document.getElementById("chord").innerText = document.getElementById("word").innerText = "Topic 1";

    $("#myList a").hover(function(){
        $(this).css("background-color", "#007bff");
        $(this).css("color", "white");
        $(this).append($('<span style="color: white;" class="float-right">-</span>'));
        }, function(){
        $(this).css("background-color", "");
        $(this).css("color", "");
        $(this).find("span:last").remove();
      });


    $("#myList a").on("click", function () {
        //on click, respective graphs takes topic title
        $(this).find("span:last").remove();
        // document.getElementById(this.id).remove($('<span class="float-right">-</span>'));``
        document.getElementById("word").innerText = document.getElementById("chord").innerText = document.getElementById("scatter").innerText = document.getElementById(this.id).innerText;

        //select respective topic data from json data , data.js and render the graphs
        Object.keys(topics).map(topic => {

            let id = $(this).attr("id")
            if (topic === document.getElementById(this.id).innerText) {
                // document.getElementById(this.id).find("span:last").remove();


                option.series[0].data = topics[topic][0]["data"]["chord"]
                option.series[0].matrix = topics[topic][0]["data"].matrix
                option.color = topics[topic][0]["data"].color

                wordConfig.options.text = topics[topic][0]["data"]["word"]
                wordConfig.options.ignore = topics[topic][0]["data"].ignore

                scatterConfig["series"] = topics[topic][0]["data"]["scatter"]

                document.getElementById("distribution").innerText = topics[topic][0]["properties"]["Blog distribution"]
                document.getElementById("b_mentioned").innerText = topics[topic][0]["properties"]["Bloggers mentioned"]
                document.getElementById("p_mentioned").innerText = topics[topic][0]["properties"]["Posts mentioned"]
                document.getElementById("posting_loc").innerText = topics[topic][0]["properties"]["Posting Location"]

                myChart.setOption(option)
                rerender(wordConfig, "myChart_word")
                rerender(scatterConfig, "myChart_scatter")
            }
        })
    });



});
var today = new Date();
var dd = today.getDate();
//line graph configuration
var lineConfig = {
    "globals": {
        "font-family": "Roboto"
    },
    "graphset": [
        {
            "type": "area",
            "background-color": "#fff",
            "utc": true,
            "title": {
                "y": "15px",
                "text": "Topic Trends of Past Week",
                "background-color": "none",
                "font-color": "#05636c",
                "font-size": "15px",
                "height": "25px",
                "adjust-layout": true,
                "textAlign": "left"
            },
            "plotarea": {
                "margin-top": "10%",
                "margin-right": "dynamic",
                "margin-bottom": "dynamic",
                "margin-left": "dynamic",
                "adjust-layout": false
            },
            "scale-y": {
                "values": "-40000:80000:40000",
                "item": {
                    "font-color": "#05636c",
                    "font-weight": "normal"
                },
                "guide": {
                    "line-width": "3px",
                }
            },
            'scale-x': {
                visible: false,
                "guide": {
                    "line-width": "0px",
                    "alpha": 0.2,
                }
            },
            "plot": {
                "line-width": 2,
                "marker": {
                    "size": 1,
                    "visible": false
                },
                "tooltip": {
                    "font-family": "Roboto",
                    "font-size": "15px",
                    "text": "There were %v %t on %data-days",
                    "text-align": "left",
                    "border-radius": 5,
                    "padding": 10
                }
            },
            "series": [
                {
                    "values": getrand(40000, 80000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "aspect": "spline",
                    "background-color": "#001b29",
                    "font-family": "Roboto",
                    "font-size": "14px",
                    "text": "on Topic 3"
                },
                {
                    "values": getrand(45000, 40000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "background-color": "#647178",
                    // "alpha-area": ".3",
                    "text": "on Topic 2",
                    "aspect": "spline",
                    "font-family": "Roboto",
                    "font-size": "14px"
                },
                {
                    "values": getrand(35000, 45000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "background-color": "#0096e0",
                    "aspect": "spline",
                    // "alpha-area": "0.2",
                    "text": "on Topic 1",
                    "font-family": "Roboto",
                    "font-size": "14px"
                },
                {
                    "values": getrand(25000, 35000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "aspect": "spline",
                    "background-color": "#001b29",
                    // "alpha-area": ".3",
                    "font-family": "Roboto",
                    "font-size": "14px",
                    "text": "on Topic 3"
                },
                {
                    "values": getrand(15000, 25000, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "background-color": "#647178",
                    // "alpha-area": ".3",
                    "text": "on Topic 2",
                    "aspect": "spline",
                    "font-family": "Roboto",
                    "font-size": "14px"
                },
                {
                    "values": getrand(-40000, 0, 12),
                    "data-days": [
                        "Sept 19",
                        "Sept 20",
                        "Sept 21",
                        "Sept 22",
                        "Sept 23",
                        "Sept 24",
                        "Sept 25",
                        "Sept 26",
                        "Sept 27",
                        "Sept 28",
                        "Sept 29",
                        today
                    ],
                    "line-color": "#ffffff",
                    "background-color": "#000f3d",
                    "aspect": "spline",
                    // "alpha-area": "0.2",
                    "text": "on Topic 1",
                    "font-family": "Roboto",
                    "font-size": "14px"
                }
            ]
        }
    ]
};

//on load render for all line graph
window.onload = function () {
    zingchart.render({
        id: 'myChart_line',
        data: lineConfig,
        height: '100%',
        width: '100%',
        hideprogresslogo: true,
    });
};

//render function for all zing chart graphs
function rerender(data_, id_) {
    zingchart.render({
        id: id_,
        data: data_,
        output: "svg",
        height: "100%",
        width: "100%",
        hideprogresslogo: true,
        cache: {
            data: false
        }
    });
}

//word graph configuration
var wordConfig = {
    type: 'wordcloud',
    options: {
        text: "Word1 Word2 Word3 Word4 Word5",
        ignore: ["America", "American"],
        maxItems: 40,
        aspect: 'flow-center',
        rotate: true,
        colorType: 'palette',
        palette: ['blue'],

        style: {
            fontFamily: 'Crete Round',

            hoverState: {
                backgroundColor: '#D32F2F',
                borderRadius: 2,
                fontColor: 'white'
            },
            tooltip: {
                text: '%text: %hits',
                visible: true,

                alpha: 0.9,
                backgroundColor: '#1976D2',
                borderRadius: 2,
                borderColor: 'none',
                fontColor: 'white',
                fontFamily: 'Georgia',
                textAlpha: 1
            }
        }
    },

    source: {
        fontColor: '#64B5F6',
        fontSize: 10,
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        marginBottom: '10%'
    }
};

//render word graphs
rerender(wordConfig, "myChart_word");

var scatterConfig = {
    "type": "scatter",
    "series": [
        {
            "values": [
                [1, 9],
                [2, 15],
                [3, 21],
                [4, 30],
                [5, 40],
                [6, 59],
                [7, 60],
                [8, 75],
                [9, 81],
                [10, 99]
            ]
        },
        {
            "values": [
                [0.9, 3],
                [2.1, 13],
                [3.5, 25],
                [4.9, 35],
                [5.3, 41],
                [6.5, 57],
                [7.1, 61],
                [8.7, 70],
                [9.2, 82],
                [9.9, 95]
            ]
        },
        {
            "values": [
                [0.1, 9],
                [1.8, 21],
                [1.9, 29],
                [4.1, 33],
                [4.5, 39],
                [6.9, 51],
                [7.4, 64],
                [8.9, 70],
                [9, 75],
                [9.3, 93]
            ]
        },
        {
            "values": [
                [0.3, 11],
                [0.9, 15],
                [1.1, 24],
                [2.3, 29],
                [2.9, 30],
                [3.3, 35],
                [5.6, 67],
                [6.9, 70],
                [7.3, 71],
                [8.9, 90]
            ]
        },
        {
            "values": [
                [0.5, 5],
                [1.9, 5],
                [2.5, 10],
                [3.1, 30],
                [6.5, 45],
                [6.9, 74],
                [7.2, 50],
                [7.8, 56],
                [8, 61],
                [8.5, 71]
            ]
        }
    ],

    scaleY: {
        lineColor: 'none',
        tick: {
            visible: false
        },
        guide: {
            visible: false
        },
        item: {
            visible: false
        }
    },

    scaleX: {
        visible: false
    }
};

//render scatter graphs
rerender(scatterConfig, "myChart_scatter");

//chord graphs config
var myChart = echarts.init(document.getElementById('myChart_chord'));
var colorPalette = ['red', 'green', 'blue', 'black', 'orange', 'yellow', 'violet'];

option = {
    color: [
        'red', 'blue', 'green', 'black', 'yellow',
        'purple',
    ],
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            if (params.indicator2) { // is edge
                return params.value.weight;
            } else {// is node
                return params.name
            }
        }
    },
    series: [
        {
            type: 'chord',
            radius: ['40%', '45%'], //inner ,outer
            center: ['50%', '50%'], //x, y position of center
            padding: 3,
            sort: 'ascending', // can be 'none', 'ascending', 'descending'
            sortSub: 'descending', // can be 'none', 'ascending', 'descending'
            startAngle: 90,
            clockWise: false,
            showScale: true,
            showScaleText: true,
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#000',
                    chordStyle: {
                        borderWidth: 0.5,
                        borderColor: '#333',
                        color: 'blue'
                    },
                    label: {
                        show: true,
                        color: 'red',
                        rotate:true,
                    }
                },
            },
            nodes: [
                {name:'SAMSUNG'},
                {name:'iPhone'},
                {name:'LG'},
                {name:'uk'},
                {name:'HUAWEI'},
            ],
            // data: [
            //     {
            //         name: 'SAMSUNG',
            //         itemStyle: {
            //             lineStyle: {
            //                 width: 1,
            //                 color: 'green'
            //             },
            //         }
            //     },
            //     {
            //         name: 'iPhone',
            //         itemStyle: {
            //             lineStyle: {
            //                 width: 1,
            //                 color: 'green'
            //             }
            //         }
            //     },
            //     {
            //         name: 'LG',
            //         itemStyle: {
            //             lineStyle: {
            //                 width: 1,
            //                 color: 'green'
            //             }
            //         }
            //     },
            //     {
            //         name: 'uk',
            //         itemStyle: {
            //             lineStyle: {
            //                 width: 1,
            //                 color: 'green'
            //             }
            //         }
            //     },
            //     {
            //         name: 'HUAWEI',
            //         itemStyle: {
            //             lineStyle: {
            //                 width: 1,
            //                 color: 'yellow'
            //             }
            //         }
            //     }
            // ],
            matrix: [
                [20, 40, 60, 70, 90],
                [0, 10, 0, 0, 0],
                [0, 30, 0, 0, 0],
                [0, 50, 0, 0, 0],
                [0, 60, 0, 0, 0]
            ],
        }
    ],
    graph: {
        color: colorPalette
    }
};

//render chord graphs
myChart.setOption(option)