test('Questão 4', () =>{
	
    let deque = new Deque()
		
        deque.insereInicio(1)
		deque.insereInicio(2)
		deque.insereInicio(3)
		deque.insereInicio(4)
		deque.insereFim(5)
			
		expect(deque.toString()).toBe('[4, 3, 2, 1, 5]')

		deque.removeFim()

		expect(deque.toString()).toBe('[4, 3, 2, 1]')

		deque.removeInicio()

		expect(deque.toString()).toBe('[3, 2, 1]')
	}
)