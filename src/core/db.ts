import { connect } from 'mongoose'

export const connectToDB = async () => {
    return connect(process.env.MONGODB_URL as string)
        .then(() => {
            console.info('Успешное подключение к БД')
        })
        .catch((error) => {
            console.error(error)
            throw error
        })
}
