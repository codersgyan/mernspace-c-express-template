import app from './src/app';

const startServer = async () => {
    const PORT = process.env.PORT || 5503;
    try {
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.log('Error starting server: ', err.message);
        }
    }
};

void startServer();
