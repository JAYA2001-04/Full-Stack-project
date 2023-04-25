package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/* @SpringBootApplication- it has 3 annotations:
 * 1.@ComponentScan- This annotation is used to specify the base packages to scan for spring beans/components.
 * 2.@EnableAutoConfiguration- enables the magical auto configuration which can automatically configure.
 * 3.@SpringBootConfiguration- This annotation indicates that a configuration class declares one or more @Bean methods.
 * */

@SpringBootApplication
public class FullstackApplication {

	public static void main(String[] args) {
		SpringApplication.run(FullstackApplication.class, args);
	}

}
