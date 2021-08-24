test("Questão 3", () =>{
		let e = new EmpresaConcreto();

		expect(e.existeCaminhoneiroAguardo()).toBe(false);

		e.chegada("Caminhão de areia");
		e.chegada("Caminhão de brita");
		e.chegada("Caminhão de água");
		e.chegada("Caminhão de cimento");
		e.chegada("Outro caminhão de água");
		e.chegada("Outro caminhão de areia");
		e.chegada("Outro caminhão de brita");
		e.chegada("Outro caminhão de cimento");

		expect(e.existeCaminhoneiroAguardo()).toBe(true);
		expect(e.numeroCarretamentosAtingido()).toBe(false);

		e.chegada("Caminhão de concreto");
		e.chegada("Caminhão de sacos para embalar concreto");
			
		expect(e.numeroCarretamentosAtingido()).toBe(true);

		expect(e.listarCaminhoesAguardo()).toBe("[Caminhão de areia, Caminhão de brita, Caminhão de água, Caminhão de cimento, Outro caminhão de água, Outro caminhão de areia, Outro caminhão de brita, Outro caminhão de cimento, Caminhão de concreto, Caminhão de sacos para embalar concreto]");

		e.saida();
		e.saida();

		expect(e.listarCaminhoesAguardo()).toBe("[Caminhão de água, Caminhão de cimento, Outro caminhão de água, Outro caminhão de areia, Outro caminhão de brita, Outro caminhão de cimento, Caminhão de concreto, Caminhão de sacos para embalar concreto]");
	}
)