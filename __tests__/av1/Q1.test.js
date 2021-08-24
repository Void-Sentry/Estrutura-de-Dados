let f1, f2

beforeEach(() => {
    f1 = new Fracao(1, 4)
    f2 = new Fracao(2, 5)
})

test("Questão 1", () =>{
		
	f1.multiplicacao(f2)
	expect(f1.toString()).toBe('2/20')

	f1.divide(f2)
	expect(f1.toString()).toBe('5/8')
	
})