import reducer from './reducer';
import {makeGuess, restartGame, generateAuralUpdate} from './actions';

describe('reducer', () => {
    it('should set initial state as default', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.auralStatus).toEqual('');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
    })

    it('should return current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    })

    describe('makeGuess', () => {
        it('should make guesses', () => {
            let state = {
                guesses: [],
                feedback: 'Make your guess!',
                correctAnswer: 100
            };

            state = reducer(state, makeGuess(20));
            expect(state.guesses).toEqual([20]);
            expect(state.feedback).toEqual('You\'re Ice Cold...');

            state = reducer(state, makeGuess(60));
            expect(state.guesses).toEqual([20, 60]);
            expect(state.feedback).toEqual('You\'re Cold...');

            state = reducer(state, makeGuess(80));
            expect(state.guesses).toEqual([20, 60, 80]);
            expect(state.feedback).toEqual('You\'re Warm.');

            state = reducer(state, makeGuess(95));
            expect(state.guesses).toEqual([20, 60, 80, 95]);
            expect(state.feedback).toEqual('You\'re Hot!');

            state = reducer(state, makeGuess(100));
            expect(state.guesses).toEqual([20, 60, 80, 95, 100]);
            expect(state.feedback).toEqual('You got it!');
        })
    })

    describe('restartGame', () => {
        it('should reset game', () => {
            let state = {
                guesses: [2, 4, 6, 8, 10],
                feedback: 'You got it!',
                correctAnswer: 10
            };
            const correctAnswer = 100;
            state = reducer(state, restartGame(correctAnswer));
            expect(state.guesses).toEqual([]);
            expect(state.feedback).toEqual('Make your guess!');
            expect(state.auralStatus).toEqual('');
            expect(state.correctAnswer).toEqual(correctAnswer);
        })
    })
})
