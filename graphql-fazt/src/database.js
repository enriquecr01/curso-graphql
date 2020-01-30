import mongoose from 'mongoose';

export async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/smc', {
            useNewUrlParser: true
        });

        console.log('>>> DB is conenected');
    } catch (e) {
        console.log('Something went wrong');
        console.log(e);
    }
}