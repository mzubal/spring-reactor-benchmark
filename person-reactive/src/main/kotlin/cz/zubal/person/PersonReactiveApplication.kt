package cz.zubal.person

import io.codearte.jfairy.Fairy
import io.codearte.jfairy.producer.person.Person
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.time.Duration

@SpringBootApplication
class PersonReactiveApplication

fun main(args: Array<String>) {
    runApplication<PersonReactiveApplication>(*args)
}

@RestController
@RequestMapping("/person")
class PersonController {

    private val scheduler = Schedulers.newParallel(RestController::class.java.simpleName)

    var fairy : Fairy = Fairy.create()

    @GetMapping
    fun flux(@RequestParam("number") number : Long) : Flux<Person> {
        return mono()
                .repeat()
                .take(number)
    }

    private fun mono() : Mono<Person> {
        return Mono
                .fromCallable(this::generatePerson)
                .delayElement(Duration.ofMillis(1000))
                .subscribeOn(scheduler)
    }

    private fun generatePerson() : Person {
        return fairy.person()
    }
}
