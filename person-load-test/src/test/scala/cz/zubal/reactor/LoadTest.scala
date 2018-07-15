package cz.zubal.reactor

import io.gatling.core.Predef._
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._

import scala.concurrent.duration._

class LoadTest extends Simulation {

  val httpConf = http
    .baseURL("http://localhost:8080") // Here is the root for all relative URLs

  val scn = scenario("Person Service Load Test")
    .exec(http("GET 1 Person")
      .get("/person?number=1"))

  // start with 10 users per second and ramp it up to 500 over 60 seconds
  setUp(scn.inject(rampUsersPerSec(10) to 500 during (60 seconds))
    .protocols(httpConf))
}
