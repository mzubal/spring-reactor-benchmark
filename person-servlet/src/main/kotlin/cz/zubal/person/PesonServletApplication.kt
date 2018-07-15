package cz.zubal.person

import io.codearte.jfairy.Fairy
import io.codearte.jfairy.producer.person.Person
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController

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
        return (1..number).map { generatePerson() }
    }

    private fun generatePerson() : Person {
        Thread.sleep(1000)
        return fairy.person()
    }

}
