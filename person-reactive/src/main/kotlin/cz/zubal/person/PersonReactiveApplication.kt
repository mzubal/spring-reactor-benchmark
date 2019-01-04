package cz.zubal.person

import io.codearte.jfairy.Fairy
import io.codearte.jfairy.producer.person.Person
import io.codearte.jfairy.producer.person.PersonProperties
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono
import reactor.core.scheduler.Schedulers
import java.util.concurrent.ThreadLocalRandom

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
                .fromCallable(this::getPerson)
                .subscribeOn(scheduler)
    }

    /**
     * Simulate doing work by bubble sorting a random list of people and getting one from that list
     */
    private fun getPerson(): Person {
        val persons = mutableListOf<Person>()
        // add a random number of people to the list
        for (i in 0..ThreadLocalRandom.current().nextInt(10, 1000)) {
            persons.add(generatePerson())
        }
        // bubble sort the list by person age and return the first one
        return bubbleSortPeopleByAge(persons)[0]
    }

    /**
     * generate a person with an age between 0 and 9999
     */
    private fun generatePerson() : Person {
        return fairy.person(PersonProperties.ageBetween(0, 9999))
    }

    /**
     * dumb n^2 bubble sort
     */
    private fun bubbleSortPeopleByAge(people: MutableList<Person>): List<Person> {
        val n = people.size
        var temp: Person

        for (i in 0 until n) {
            for (j in 1 until n - i) {
                if (people[j - 1].age > people[j].age) {
                    temp = people[j - 1]
                    people[j - 1] = people[j]
                    people[j] = temp
                }
            }
        }

        return people
    }
}
