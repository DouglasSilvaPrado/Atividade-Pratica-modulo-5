//package net.guides.springboot2.springboot2jpacrudexample;
//
//import static org.junit.Assert.assertEquals;
//import static org.junit.Assert.assertNotNull;
//
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.context.SpringBootTest;
//import org.springframework.boot.test.web.client.TestRestTemplate;
//import org.springframework.boot.web.server.LocalServerPort;
//import org.springframework.http.HttpEntity;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.test.context.junit4.SpringRunner;
//import org.springframework.web.client.HttpClientErrorException;
//
//import net.guides.springboot.crud.Application;
//import net.guides.springboot.crud.model.Pessoa;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest(classes = Application.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
//public class EmployeeControllerIntegrationTest {
//	@Autowired
//	private TestRestTemplate restTemplate;
//
//	@LocalServerPort
//	private int port;
//
//	private String getRootUrl() {
//		return "http://localhost:" + port;
//	}
//
//	@Test
//	public void contextLoads() {
//
//	}
//
//	@Test
//	public void testGetAllEmployees() {
//		HttpHeaders headers = new HttpHeaders();
//		HttpEntity<String> entity = new HttpEntity<String>(null, headers);
//
//		ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/employees",
//				HttpMethod.GET, entity, String.class);
//		
//		assertNotNull(response.getBody());
//	}
//
//	@Test
//	public void testGetEmployeeById() {
//		Pessoa pessoa = restTemplate.getForObject(getRootUrl() + "/employees/1", Pessoa.class);
//		System.out.println(pessoa.getFirstName());
//		assertNotNull(pessoa);
//	}
//
//	@Test
//	public void testCreateEmployee() {
//		Pessoa pessoa = new Pessoa();
//		pessoa.setEmailId("admin@gmail.com");
//		pessoa.setFirstName("admin");
//		pessoa.setLastName("admin");
//
//		ResponseEntity<Pessoa> postResponse = restTemplate.postForEntity(getRootUrl() + "/employees", pessoa, Pessoa.class);
//		assertNotNull(postResponse);
//		assertNotNull(postResponse.getBody());
//	}
//
//	@Test
//	public void testUpdateEmployee() {
//		int id = 1;
//		Pessoa pessoa = restTemplate.getForObject(getRootUrl() + "/employees/" + id, Pessoa.class);
//		pessoa.setFirstName("admin1");
//		pessoa.setLastName("admin2");
//
//		restTemplate.put(getRootUrl() + "/employees/" + id, pessoa);
//
//		Pessoa updatedEmployee = restTemplate.getForObject(getRootUrl() + "/employees/" + id, Pessoa.class);
//		assertNotNull(updatedEmployee);
//	}
//
//	@Test
//	public void testDeleteEmployee() {
//		int id = 2;
//		Pessoa pessoa = restTemplate.getForObject(getRootUrl() + "/employees/" + id, Pessoa.class);
//		assertNotNull(pessoa);
//
//		restTemplate.delete(getRootUrl() + "/employees/" + id);
//
//		try {
//			pessoa = restTemplate.getForObject(getRootUrl() + "/employees/" + id, Pessoa.class);
//		} catch (final HttpClientErrorException e) {
//			assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
//		}
//	}
//}
