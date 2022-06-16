import {authReducer} from '../../auth/authReducer'
import { types } from '../../types/types';

describe('Pruebas en authReducer', () => {

    test('retornar el estado por defecto', () => {

        const state = authReducer({ logged: false},{});
        expect( state ).toEqual({logged: false});


    })

    test('Autenticar y colocar el name de usuario', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'hernan'
            }
        }
        
        const state = authReducer({ logged: false},action);
        expect( state ).toEqual({
            logged: true,
            name: 'hernan'
        });
    })

    test('Borrar name de usuario y logged en false', () => {

        const action = {
            type: types.logout
        }
        
        const state = authReducer({ logged: true, name: 'juan'},action);
        expect( state ).toEqual({logged: false,});
    })


})


