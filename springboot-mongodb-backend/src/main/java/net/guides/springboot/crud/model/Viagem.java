package net.guides.springboot.crud.model;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document (collection = "Viagem")
public class Viagem {
	
	@Transient
    public static final String SEQUENCE_NAME = "users_sequence";
	
	@Id
	private long id;
	
	@NotBlank
    @Size(max=100)
	private String Origem;
	private String Destino;
	@NotBlank
    @Size(max=100)
	private String DataIda;
	private String DataVolta;
	
	public Viagem() {
		
	}

	public Viagem(String origem, String destino, String dataIda, String dataVolta) {
		Origem = origem;
		Destino = destino;
		DataIda = dataIda;
		DataVolta = dataVolta;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getOrigem() {
		return Origem;
	}

	public void setOrigem(String origem) {
		Origem = origem;
	}

	public String getDestino() {
		return Destino;
	}

	public void setDestino(String destino) {
		Destino = destino;
	}

	public String getDataIda() {
		return DataIda;
	}

	public void setDataIda(String dataIda) {
		DataIda = dataIda;
	}

	public String getDataVolta() {
		return DataVolta;
	}

	public void setDataVolta(String dataVolta) {
		DataVolta = dataVolta;
	}

	@Override
	public String toString() {
		return "Viagem [id=" + id + ", Origem=" + Origem + ", Destino=" + Destino + ", DataIda=" + DataIda
				+ ", DataVolta=" + DataVolta + "]";
	}

		

}
