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
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58948",
        "ok": "58948",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "26146",
        "ok": "26146",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18975",
        "ok": "18975",
        "ko": "-"
    },
    "percentiles1": {
        "total": "27666",
        "ok": "27670",
        "ko": "-"
    },
    "percentiles2": {
        "total": "42698",
        "ok": "42692",
        "ko": "-"
    },
    "percentiles3": {
        "total": "55216",
        "ok": "55216",
        "ko": "-"
    },
    "percentiles4": {
        "total": "58151",
        "ok": "58151",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1784,
        "percentage": 12
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 241,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13275,
        "percentage": 87
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
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "58948",
        "ok": "58948",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "26146",
        "ok": "26146",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "18975",
        "ok": "18975",
        "ko": "-"
    },
    "percentiles1": {
        "total": "27668",
        "ok": "27667",
        "ko": "-"
    },
    "percentiles2": {
        "total": "42691",
        "ok": "42691",
        "ko": "-"
    },
    "percentiles3": {
        "total": "55216",
        "ok": "55216",
        "ko": "-"
    },
    "percentiles4": {
        "total": "58151",
        "ok": "58151",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1784,
        "percentage": 12
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 241,
        "percentage": 2
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 13275,
        "percentage": 87
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
