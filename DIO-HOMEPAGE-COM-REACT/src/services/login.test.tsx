import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        login("Boas Vindas David")
        expect(mockAlert).toHaveBeenCalledWith('Boas Vindas David')
    })
})