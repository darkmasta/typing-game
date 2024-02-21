declare global {
    const _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
