var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15300",
        "ok": "15300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11313",
        "ok": "11313",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2596",
        "ok": "2596",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2662",
        "ok": "2662",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1618",
        "ok": "1618",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3844",
        "ok": "3844",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8235",
        "ok": "8235",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9576",
        "ok": "9576",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4862,
        "percentage": 32
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1486,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8952,
        "percentage": 59
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "128.571",
        "ok": "128.571",
        "ko": "-"
    }
},
contents: {
"req_get-1-person-059b3": {
        type: "REQUEST",
        name: "GET 1 Person",
path: "GET 1 Person",
pathFormatted: "req_get-1-person-059b3",
stats: {
    "name": "GET 1 Person",
    "numberOfRequests": {
        "total": "15300",
        "ok": "15300",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11313",
        "ok": "11313",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2596",
        "ok": "2596",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2662",
        "ok": "2662",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1618",
        "ok": "1618",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3844",
        "ok": "3844",
        "ko": "-"
    },
    "percentiles3": {
        "total": "8235",
        "ok": "8235",
        "ko": "-"
    },
    "percentiles4": {
        "total": "9576",
        "ok": "9576",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 4862,
        "percentage": 32
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 1486,
        "percentage": 10
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 8952,
        "percentage": 59
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "128.571",
        "ok": "128.571",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
