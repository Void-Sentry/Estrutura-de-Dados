test("Questão 2", () =>{
		expect(verificaExpressao("[()[()]]()")).toBe(true)
		expect(verificaExpressao("(()]")).toBe(false)
	}
)