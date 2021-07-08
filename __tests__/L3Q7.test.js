import FilaCircular from '../src/L3Q7'

let f

beforeEach(() => {
	
    f = new FilaCircular(15)

})

test('Instanciação', () => {

    expect(f.isEmpty()).toBe(true)
	expect(f.isFull()).toBe(false)
	//expect(f.lenght()).toBe(0)
	//expect(() => {
	//	f.dequeue()
	//}).toThrowError('queue underflow')

})

test('Completa a fila', () => {

    f.enqueue('rebelde1')
	f.enqueue('rebelde2')
	f.enqueue('rebelde3')
	f.enqueue('rebelde4')
	f.enqueue('rebelde5')
    f.enqueue('rebelde6')

    f.jump()

    expect(f.size()).toBe(1)
    expect(f.first()).toBe('rebelde6')

    //expect(f.front()).toBe('B')
	//expect(f.lenght()).toBe(4)
	//expect(f.isFull()).toBe(false)

})