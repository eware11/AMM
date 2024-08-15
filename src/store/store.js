import { configureStore } from '@reduxjs/toolkit'

import provider from './src/store/reducers/provider'
import tokens from './src/store/reducers/tokens'
import amm from './src/store/reducers/amm'

export const store = configureStore({
    reducer: {
        provider,
        tokens,
        amm
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})

