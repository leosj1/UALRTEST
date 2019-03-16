const topics = {
    "type": "FeatureCollection",
    "Topic 1": [
        {
            "name": "Topic 1",
            "properties": {
                "Blog distribution": "80%",
                "Bloggers mentioned": "50",
                "Posting Location": "Nigeria",
                "Posts mentioned": "100"
            },
            "data": {
                "word":
                    "Word5 Word2 Word1 Word8 Word5 Word6 Word1 Word3 Word2 Word4 Word10 Word2 Word9 Word1 Word9 Word2 Word3 Word7 Word1 Word2 Word3 Word1 Word1 Word2 Word1 Word1 Word1 Word2 Word5 Word1 Word1 Word2"
                ,
                ignore: ["America", "American", "is", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would","the","of","in","is","to","with","and"],
                color: ['red', 'grey', 'blue', 'green', '#2d83ae',]
                ,
                matrix: [
                    [30000, 20, 30, 540, 550],
                    [405, 20, 10, 522, 544],
                    [805, 165, 80, 5855, 54],
                    [105, 995, 9455, 569, 520],
                    [105, 995, 954, 659, 150]
                ],
                "chord":
                    [
                        {
                            name: 'BARCELONA',
                            itemStyle: {
                                color: 'black',
                                lineStyle: {
                                    width: 1,
                                    color: 'green'
                                },
                                emphasis: {
                                    color: 'black',
                                    lineStyle: {
                                        width: 1,
                                        color: 'red'
                                    }
                                }
                            }
                        },
                        {
                            name: 'ARSENAL',
                            itemStyle: {
                                color: 'red',
                                lineStyle: {
                                    width: 1,
                                    color: 'green'
                                }
                            }
                        },
                        {
                            name: 'JUVENTUS',
                            itemStyle: {
                                color: 'blue',
                                lineStyle: {
                                    width: 1,
                                    color: 'green'
                                }
                            }
                        },
                        {
                            name: 'REAL MADRID',
                            itemStyle: {
                                color: 'blue',
                                lineStyle: {
                                    width: 1,
                                    color: 'green'
                                }
                            }
                        },
                        {
                            name: 'LIVERPOOL',
                            itemStyle: {
                                color: 'green',
                                lineStyle: {
                                    width: 1,
                                    color: 'yellow'
                                }
                            }
                        }
                    ],
                "scatter": [
                    {
                        "values": [
                            [10, 90],
                            [20, 15],
                            [3, 21],
                            [40, 30],
                            [5, 40],
                            [6, 590],
                            [7, 60],
                            [80, 75],
                            [9, 81],
                            [10, 99]
                        ]
                    },
                    {
                        "values": [
                            [0.09, 3],
                            [2.1, 103],
                            [30.5, 25],
                            [4.9, 35],
                            [50.3, 41],
                            [6.5, 57],
                            [7.1, 61],
                            [8.7, 70],
                            [9.2, 82],
                            [90.9, 95]
                        ]
                    },
                    {
                        "values": [
                            [0.1, 9],
                            [1.8, 21],
                            [1.9, 29],
                            [40.1, 33],
                            [4.5, 39],
                            [6.9, 51],
                            [7.4, 64],
                            [80.9, 70],
                            [9, 750],
                            [9.3, 93]
                        ]
                    },
                    {
                        "values": [
                            [0.3, 11],
                            [0.9, 15],
                            [1.1, 24],
                            [2.3, 209],
                            [2.9, 30],
                            [3.3, 35],
                            [5.6, 67],
                            [6.09, 700],
                            [7.3, 71],
                            [8.9, 90]
                        ]
                    },
                    {
                        "values": [
                            [0.5, 5],
                            [1.90, 50],
                            [2.50, 10],
                            [3.1, 30],
                            [6.50, 45],
                            [6.9, 74],
                            [7.2, 50],
                            [7.8, 56],
                            [8, 61],
                            [8.5, 71]
                        ]
                    }
                ]
            }
        }

    ],


    "Topic 2": [
        {
            "name": "Topic 2",
            "properties": {
                "Blog distribution": "20%",
                "Bloggers mentioned": "1000",
                "Posting Location": "Spain",
                "Posts mentioned": "4"
            },
            "data": {
                "word":
                    "The Barcelona boss insisted hsi star man did not suffer an injury as his side made Clasico history against Real Madrid Lionel Messi is \"fine\" after a bruising Clasico clash with Real Madrid, says Barcelona head coach Ernesto Valverde. Messi appeared to be suffering from soreness in his groin early in the second half as Barca ran out 1 - 0 winners in Saturday's La Liga clash at the Santiago Bernabeu. The Barca captain was also involved in a first - half flashpoint with Madrid counterpart Sergio Ramos, who later denied deliberately pushing his arm into the forward's face ."
                ,
                ignore: ["America", "American", "is", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would","the","of","in","is","to","with","and"],
                color: ['#6d6e6f', '#1648c5', '#c5162d', '#1639c5', '#a216c5',],
                matrix: [
                    [300, 20, 30, 540, 50],
                    [405, 20, 10, 522, 44],
                    [80, 65, 80, 855, 54],
                    [105, 95, 955, 569, 50],
                    [105, 95, 54, 659, 150]
                ],
                "chord": [
                    {
                        name: 'MBAPPE',
                        itemStyle: {
                            color: 'black',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            },
                            emphasis: {
                                color: 'black',
                                lineStyle: {
                                    width: 1,
                                    color: 'red'
                                }
                            }
                        }
                    },
                    {
                        name: 'RONALDO',
                        itemStyle: {
                            color: 'red',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'MESSI',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'RONALDINHO',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'AUBAMEYANG',
                        itemStyle: {
                            color: 'green',
                            lineStyle: {
                                width: 1,
                                color: 'yellow'
                            }
                        }
                    }
                ],
                "scatter": [
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
                ]
            }
        }
    ],


    "Topic 3": [
        {
            "name": "Topic 3",
            "properties": {
                "Blog distribution": "99%",
                "Bloggers mentioned": "4",
                "Posting Location": "MEXICO",
                "Posts mentioned": "77"
            },
            "data": {
                "word":
                    "California\
                    California is the most populated state in the US with a total population of 39,536,653. The state also happens to be one of the fastest growing in the country. California is the third largest state by land area. On the economic front, the state of California has the highest output in the agricultural industry. The economy is concentrated on finance, real estate, business services and the film industry. Chevron, Apple, and McKesson, three of the world’s largest firms, also have their headquarters in California. With such robust economic activities, the population is bound to be high as people look to exploit the available opportunities. If California were a country, it would rank as the 6th largest economy in the world, and such are the pulling factors that attract people to California.\
                    Texas\
                    Texas is the second most populated state in the US with a population of 28,304,596. The state is the second largest in the country by land area. Texas was earlier associated with the cattle industry, but oil discoveries in the state initiated an economic surge at the beginning of the twentieth century. The state invested in education and had developed into a diversified economy, leading in many industries such as energy, electronics, aerospace, and biomedical sciences. The state of Texas has been a leader in export revenue since 2002. The strong economy and different economic opportunities keep attracting people to the state.\
                    Two Least Populated States Of The US\
                    Wyoming \
                    Wyoming is the least populated state in the country. It is home to only 579,315 people. Due to its large land area, Wyoming ranks as the second least densely populated state in the country. A lack of population centers and a relatively harsh climate are some of the reasons why Wyoming has not attracted a large population. One of the biggest industries in Wyoming is tourism. The state is home to a number of famous national parks including Yellowstone National Park. \
                    Vermont\
                    Vermont is the second least populated state in the country, with a total population of 623,657. Located in the country's New England region, the capital of Vermont is Montpelier. Like Wyoming, Vermont may have a low population due to its climate, which includes very harsh winters. The largest city in Vermont is Burlington. \
                    US States By Population"
                ,
                ignore: ["America", "American", "is", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would","the","of","in","is","to","with","and"],
                color: ['#6d6e6f','#a216c5' , '#1639c5','#c5162d',  '#1648c5'],
                matrix: [
                    [3000, 20, 30, 500, 150],
                    [100, 2100, 10, 5202, 414],
                    [80, 615, 800, 1000, 5114],
                    [2001, 10, 9505, 569, 510],
                    [10, 95, 54, 66, 1510]
                ],
                "chord": [
                    {
                        name: 'FLORIDA',
                        itemStyle: {
                            color: 'black',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            },
                            emphasis: {
                                color: 'black',
                                lineStyle: {
                                    width: 1,
                                    color: 'red'
                                }
                            }
                        }
                    },
                    {
                        name: 'TEXAS',
                        itemStyle: {
                            color: 'red',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'CALIFORNIA',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'ARKANSAS',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'GEORGIA',
                        itemStyle: {
                            color: 'green',
                            lineStyle: {
                                width: 1,
                                color: 'yellow'
                            }
                        }
                    }
                ],
                "scatter": [
                    {
                        "values": [
                            [10, 9],
                            [2, 105],
                            [3, 201],
                            [40, 30],
                            [5, 40],
                            [6, 509],
                            [7, 60],
                            [80, 705],
                            [9, 801],
                            [100, 99]
                        ]
                    },
                    {
                        "values": [
                            [0.9, 3],
                            [20.1, 13],
                            [3.5, 25],
                            [4.9, 305],
                            [50.3, 401],
                            [60.5, 57],
                            [7.1, 61],
                            [8.7, 70],
                            [90.2, 802],
                            [9.9, 95]
                        ]
                    },
                    {
                        "values": [
                            [0.1, 9],
                            [10.8, 21],
                            [10.9, 29],
                            [40.1, 33],
                            [4.05, 39],
                            [6.9, 51],
                            [7.04, 64],
                            [80.9, 70],
                            [90, 705],
                            [9.3, 93]
                        ]
                    },
                    {
                        "values": [
                            [0.3, 11],
                            [0.09, 15],
                            [10.1, 204],
                            [2.3, 209],
                            [20.9, 30],
                            [3.3, 35],
                            [5.6, 607],
                            [60.9, 70],
                            [7.03, 71],
                            [8.09, 90]
                        ]
                    },
                    {
                        "values": [
                            [0.05, 50],
                            [1.09, 50],
                            [20.05, 10],
                            [30.01, 30],
                            [6.005, 45],
                            [6.09, 74],
                            [70.02, 50],
                            [7.8, 506],
                            [80, 61],
                            [8.5, 71]
                        ]
                    }
                ]
            }
        }
    ],


    "Topic 4": [
        {
            "name": "Topic 4",
            "properties": {
                "Blog distribution": "100%",
                "Bloggers mentioned": "55",
                "Posting Location": "UGANDA",
                "Posts mentioned": "77"
            },
            "data": {
                "word":
                    "Incumbent President Muhammadu Buhari was selected as the sole candidate of the All Progressives Congress party primaries held on 29 September 2018.[18] Chike Ukaegbu, founder of Startup52, is the presidential candidate of AAP.[19] Donald Duke, a former governor of Cross River State, is the presidential candidate of the SDP.[20] Fela Durotoye, motivational speaker and presidential candidate of Alliance for New Nigeria.[21] Oby Ezekwesili, former Minister of Education and leader of the Bring Back Our Girls campaign.[22] She ended her campaign on January 24, 2019 to combine support with other candidates to support a bid against APC and PDP.[23] Tope Fasua, founder and National Chairman of the Abundant Nigeria Renewal Party.[24 Rabiu Kwankwaso, former governor of Kano State.[25] Sule Lamido, a former governor of Jigawa State.[26] Ahmed Makarfi, former chairman of the People's Democratic Party National Caretaker Committee.[24] Obadiah Mailafia, former Deputy Governor of the Central Bank of Nigeria and candidate of the African Democratic Congress.[27] Kingsley Moghalu, former Deputy Governor of the CBN and Professor of Practice at Tufts University's Fletcher School of Law and Diplomacy.[28] Omoyele Sowore, human rights activist, pro-democracy campaigner and publisher of news website Sahara Reporters.[31]"
                ,
                ignore: ["America", "American", "is", "Because", "because", "could", "don’t", "people", "That’s", "that’s", "Their", "their", "there", "these", "thing", "those", "through", "We’re", "we’re", "where", "would","the","of","in","is","to","with","and"],
                color: ['#6d6e6f','#a216c5' , '#1639c5','#c5162d',  '#1648c5'],
                matrix: [
                    [300, 20, 30, 50, 50],
                    [10, 20, 10, 522, 44],
                    [80, 65, 80, 10, 54],
                    [20, 10, 955, 569, 50],
                    [10, 95, 54, 66, 150]
                ],
                "chord": [
                    {
                        name: 'BUHARI',
                        itemStyle: {
                            color: 'black',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            },
                            emphasis: {
                                color: 'black',
                                lineStyle: {
                                    width: 1,
                                    color: 'red'
                                }
                            }
                        }
                    },
                    {
                        name: 'SOWORE',
                        itemStyle: {
                            color: 'red',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'ATIKU',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'DUROTOYE',
                        itemStyle: {
                            color: 'blue',
                            lineStyle: {
                                width: 1,
                                color: 'green'
                            }
                        }
                    },
                    {
                        name: 'MOGHALU',
                        itemStyle: {
                            color: 'green',
                            lineStyle: {
                                width: 1,
                                color: 'yellow'
                            }
                        }
                    }
                ],
                "scatter": [
                    {
                        "values": [
                            [10, 9],
                            [2, 105],
                            [3, 201],
                            [40, 30],
                            [5, 40],
                            [6, 509],
                            [7, 60],
                            [80, 705],
                            [9, 801],
                            [100, 99]
                        ]
                    },
                    {
                        "values": [
                            [0.9, 3],
                            [20.1, 13],
                            [3.5, 25],
                            [4.9, 305],
                            [50.3, 401],
                            [60.5, 57],
                            [7.1, 61],
                            [8.7, 70],
                            [90.2, 802],
                            [9.9, 95]
                        ]
                    },
                    {
                        "values": [
                            [0.1, 9],
                            [10.8, 21],
                            [10.9, 29],
                            [40.1, 33],
                            [4.05, 39],
                            [6.9, 51],
                            [7.04, 64],
                            [80.9, 70],
                            [90, 705],
                            [9.3, 93]
                        ]
                    },
                    {
                        "values": [
                            [0.3, 11],
                            [0.09, 15],
                            [10.1, 204],
                            [2.3, 209],
                            [20.9, 30],
                            [3.3, 35],
                            [5.6, 607],
                            [60.9, 70],
                            [7.03, 71],
                            [8.09, 90]
                        ]
                    },
                    {
                        "values": [
                            [0.05, 50],
                            [1.09, 50],
                            [20.05, 10],
                            [30.01, 30],
                            [6.005, 45],
                            [6.09, 74],
                            [70.02, 50],
                            [7.8, 506],
                            [80, 61],
                            [8.5, 71]
                        ]
                    }
                ]
            }
        }
    ]
}