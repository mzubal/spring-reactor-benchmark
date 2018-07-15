var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "15300",
        "ok": "9101",
        "ko": "6199"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1002",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28880",
        "ok": "28324",
        "ko": "28880"
    },
    "meanResponseTime": {
        "total": "2698",
        "ok": "4531",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "4265",
        "ok": "4705",
        "ko": "492"
    },
    "percentiles1": {
        "total": "1007",
        "ok": "2729",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3821",
        "ok": "6585",
        "ko": "0"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "13455",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20867",
        "ok": "24838",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2997,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6104,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 6199,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "126.446",
        "ok": "75.215",
        "ko": "51.231"
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
        "ok": "9101",
        "ko": "6199"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1002",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "28880",
        "ok": "28324",
        "ko": "28880"
    },
    "meanResponseTime": {
        "total": "2698",
        "ok": "4531",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "4265",
        "ok": "4705",
        "ko": "492"
    },
    "percentiles1": {
        "total": "1007",
        "ok": "2726",
        "ko": "0"
    },
    "percentiles2": {
        "total": "3825",
        "ok": "6587",
        "ko": "0"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "13483",
        "ko": "0"
    },
    "percentiles4": {
        "total": "20881",
        "ok": "24838",
        "ko": "0"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 2997,
        "percentage": 20
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 6104,
        "percentage": 40
    },
    "group4": {
        "name": "failed",
        "count": 6199,
        "percentage": 41
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "126.446",
        "ok": "75.215",
        "ko": "51.231"
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
