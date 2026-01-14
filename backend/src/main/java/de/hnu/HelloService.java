package de.hnu;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(originPatterns = "http://localhost:*")
@RestController
public class HelloService {
    
	@GetMapping("/greeting/{name}")
	public String sayHello(@PathVariable(value = "name") String name) {
		if (name == null) {
			return null;
		}
		return "Hello, "+name+" "+name;
	}

	public int sumUp(int a, int b) {
		if ((a >= 0) && (b >= 0)) {
			return a+b;
		}
		return 0;
	}

	@GetMapping("/hello")
	public String hello() {
		return "Hello World From Spring boot server";
	}

}