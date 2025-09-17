import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { CounterSchema } from '../../types/counterSchema';

export const getCounterValue = createSelector(
    getCounter, // существующий селектор
    (counter: CounterSchema) => counter.value,
);
