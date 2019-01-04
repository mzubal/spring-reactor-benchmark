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
import java.util.concurrent.ThreadLocalRandom

@SpringBootApplication
class PersonReactiveApplication

fun main(args: Array<String>) {
    runApplication<PersonReactiveApplication>(*args)
}

@RestController
@RequestMapping("/person")
class PersonController {

    val fairy : Fairy = Fairy.create()

    @GetMapping
    fun persons(@RequestParam number : Long) : List<Person> {
        return (1..number).map { getPerson() }
    }

    /**
     * Simulate doing work by bubble sorting a random list of people and getting one from that list
     */
    private fun getPerson(): Person {
        val persons = mutableListOf<Person>()
        for (i in 0..ThreadLocalRandom.current().nextInt(10, 1000)) {
            persons.add(generatePerson())
        }

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
